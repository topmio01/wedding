<template>
  <div class="bg-amber-50 p-8 rounded-3xl border border-amber-100">
    <h2 class="text-3xl font-wedding text-amber-700 mb-6">ร่วมแสดงความยินดี</h2>
    <div class="text-center mb-6 p-4 bg-white rounded-xl shadow-sm">
      <p class="text-sm text-gray-500 uppercase">ธนาคารกสิกรไทย</p>
      <p class="text-xl font-bold tracking-widest">123-4-56789-0</p>
      <p class="text-gray-700">ชื่อบัญชี: นายสมชาย และ นางสาวสมหญิง</p>
    </div>
    <form class="space-y-4" @submit.prevent>
      <input type="text" placeholder="ชื่อผู้โอน" class="w-full p-3 rounded-lg border outline-none">
      <label class="block text-sm text-gray-500 mb-1">แนบสลิปการโอน</label>
      <input type="file"
             class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-100 file:text-amber-700 hover:file:bg-amber-200">
      <button class="w-full bg-amber-700 text-white py-3 rounded-lg hover:bg-amber-800 transition">อัปโหลดสลิป</button>
    </form>
  </div>
</template>
