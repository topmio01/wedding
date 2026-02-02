<template>
  <div class="bg-white p-8 sm:p-10 rounded-[2rem] shadow-md border border-stone-100">
    <div class="text-center mb-8">
      <h2 class="text-3xl sm:text-4xl font-serif text-amber-700 mb-3">แบบฟอร์มตอบรับ RSVP</h2>
    </div>
    <div class="mb-8 rounded-3xl bg-gradient-to-br from-amber-50 to-stone-50 border border-amber-100 p-6">
      <p class="text-lg sm:text-xl text-amber-800 leading-[1.9] font-sarabun font-medium tracking-wide text-center">
        เพื่อให้เราสามารถเตรียมการต้อนรับและดูแลท่านอย่างดีที่สุดในฐานะแขกรับเชิญ
        <br class="hidden sm:block" />
        ขอความกรุณาท่านตอบแบบฟอร์มยืนยันการเข้าร่วมงานด้วยนะคะ/ครับ
      </p>
    </div>

    <form class="space-y-5" @submit.prevent="submitRSVP">
      <div>
        <label class="block text-sm text-stone-600 mb-1">ชื่อ – นามสกุล</label>
        <input v-model="formData.name" type="text" placeholder="กรุณากรอกชื่อของท่าน"
          class="w-full p-4 rounded-xl border border-stone-200 focus:ring-2 focus:ring-amber-200 focus:border-amber-300 outline-none transition"
          required />
      </div>

      <div>
        <label class="block text-sm text-stone-600 mb-2">ท่านเป็นแขกรับเชิญฝ่าย</label>
        <div class="flex gap-4">
          <label
            class="flex items-center gap-2 px-4 py-3 rounded-xl border border-stone-200 cursor-pointer hover:border-amber-300 transition"
            :class="{ 'border-amber-400 bg-amber-50': formData.side === 'groom' }">
            <input type="radio" v-model="formData.side" value="groom" class="accent-amber-600">
            ฝ่ายเจ้าบ่าว
          </label>

          <label
            class="flex items-center gap-2 px-4 py-3 rounded-xl border border-stone-200 cursor-pointer hover:border-amber-300 transition"
            :class="{ 'border-amber-400 bg-amber-50': formData.side === 'bride' }">
            <input type="radio" v-model="formData.side" value="bride" class="accent-amber-600">
            ฝ่ายเจ้าสาว
          </label>
        </div>
      </div>

      <div>
        <label class="block text-sm text-stone-600 mb-1">การเข้าร่วมงาน</label>
        <select v-model="formData.attendance"
          class="w-full p-4 rounded-xl border border-stone-200 focus:ring-2 focus:ring-amber-200 focus:border-amber-300 outline-none transition"
          required>
          <option disabled value="">กรุณาเลือก</option>
          <option value="attending">สะดวกมาร่วมงาน</option>
          <option value="not_attending">ไม่สะดวกมาร่วมงาน</option>
        </select>
      </div>

      <div v-if="formData.attendance === 'attending'" class="animate-fade-in-down">
        <label class="block text-sm text-stone-600 mb-1">จำนวนผู้ติดตาม</label>
        <input v-model="formData.guests" type="number" min="0" placeholder="เช่น 1, 2"
          class="w-full p-4 rounded-xl border border-stone-200 focus:ring-2 focus:ring-amber-200 focus:border-amber-300 outline-none transition" />
      </div>

      <button type="submit" :disabled="isLoading"
        class="w-full mt-6 bg-gradient-to-r from-stone-800 to-stone-900 text-white py-4 rounded-xl text-lg tracking-wide hover:opacity-90 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center">
        <span v-if="isLoading">กำลังบันทึก...</span>
        <span v-else>บันทึกข้อมูล</span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

// 1. ตัวแปรสำหรับเก็บข้อมูลฟอร์ม
const formData = reactive({
  name: '',
  side: '',
  attendance: '',
  guests: ''
});

// สถานะการโหลด
const isLoading = ref(false);

// 2. ฟังก์ชันส่งข้อมูล
const submitRSVP = async () => {
  // ตรวจสอบความครบถ้วนของข้อมูลเบื้องต้น
  if (!formData.name || !formData.side || !formData.attendance) {
    alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    return;
  }

  isLoading.value = true;
  // URL ที่ได้จาก Google Apps Script (วางทับตรงนี้เลย)
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwtvQ5idZK_G6mpt7qh3nni8yIXRTme2tzgdoKDpB0nqBEO06yVDT2yWJO62XakazjU/exec';

  try {
    // ส่งข้อมูลด้วย fetch
    // ใช้ mode: 'no-cors' เพื่อเลี่ยงปัญหา CORS ของ Google ในบาง Browser
    // หมายเหตุ: การใช้ no-cors เราจะไม่รู้ response ที่แท้จริง แต่ข้อมูลจะลง Sheet
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    // เนื่องจาก no-cors เราจึงสมมติว่าสำเร็จถ้าไม่ error
    alert("บันทึกข้อมูลเรียบร้อยแล้ว ขอบคุณครับ/ค่ะ");
    // เคลียร์ฟอร์ม
    formData.name = '';
    formData.side = '';
    formData.attendance = '';
    formData.guests = '';

  } catch (error) {
    console.error('Error:', error);
    alert("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
  } finally {
    isLoading.value = false;
  }
};
</script>
