<template>
  <div class="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
    <h2 class="text-3xl font-wedding text-amber-700 mb-6">แบบฟอร์มตอบรับ (RSVP)</h2>
    <form class="space-y-4" @submit.prevent>
      <input type="text" placeholder="ชื่อ-นามสกุล"
             class="w-full p-3 rounded-lg border focus:ring-2 focus:ring-amber-200 outline-none">
      <div class="flex gap-4">
        <label class="flex items-center gap-2"><input type="radio" name="side" value="groom"> ฝ่ายเจ้าบ่าว</label>
        <label class="flex items-center gap-2"><input type="radio" name="side" value="bride"> ฝ่ายเจ้าสาว</label>
      </div>
      <select class="w-full p-3 rounded-lg border outline-none">
        <option>สะดวกมาร่วมงาน</option>
        <option>ไม่สะดวกมาร่วมงาน</option>
      </select>
      <input type="number" placeholder="จำนวนผู้ติดตาม" class="w-full p-3 rounded-lg border outline-none">
      <button class="w-full bg-stone-800 text-white py-3 rounded-lg hover:bg-black transition">บันทึกข้อมูล</button>
    </form>
  </div>
</template>
