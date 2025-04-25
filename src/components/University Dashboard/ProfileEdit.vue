<script lang="ts" setup>
</script>

<template>
    <div class="w-[100%] bg-gray-100 py-2 px-4 sm:px-6 lg:px-8 pt-5">
        <div class="mx-auto space-y-8">
            <div class="bg-white shadow overflow-hidden rounded-md p-5">
                <div>
                    <h2 class="text-2xl font-semibold text-gray-900">Basic Information</h2>
                    <p class="mt-1 text-sm text-gray-500">Update your university's core information</p>
                </div>
                <form action="" class="w-[100%] px-4 py-5 sm:p-6">
                    <div class="grid gap-6">

                        <div class="flex flex-col gap-3">
                            <img class="w-[20%] shadow-lg" src="/src/assets/images/logo.png" alt="">
                            <label for="phoneNumber" class="block text-sm font-medium text-gray-700">Logo
                                (Image)</label>
                            <input type="file" id="phoneNumber" value="logo.png"
                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>

                        <div class="flex flex-col gap-3">
                            <img class="w-[20%] shadow-lg" src="/src/assets/images/havard.png" alt="">
                            <label for="phoneNumber" class="block text-sm font-medium text-gray-700">Cover
                                Photo</label>
                            <input type="file" id="phoneNumber" value="havard.png"
                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>

                        <div class="flex w-[100%] gap-4">
                            <div class="flex flex-col w-full">
                                <label for="universityName" class="block text-sm font-medium text-gray-700">University
                                    Name</label>
                                <input type="text" id="universityName" value="Harvard University"
                                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                            </div>
                            <div class="flex flex-col w-full">
                                <label for="universityType" class="block text-sm font-medium text-gray-700">University
                                    Type</label>
                                <select id="universityType"
                                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                    <option>Private</option>
                                    <option>Public</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-span-1 sm:col-span-1">
                            <label for="foundedYear" class="block text-sm font-medium text-gray-700">Founded
                                Year</label>
                            <input type="text" id="foundedYear" value="1636"
                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>

                        <div class="col-span-1">
                            <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
                            <input type="text" id="country" value="United States"
                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>

                        <div class="col-span-1">
                            <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                            <input type="text" id="city" value="Cambridge"
                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>

                        <div class="col-span-1">
                            <label for="address" class="block text-sm font-medium text-gray-700">Student
                                Population</label>
                            <input type="text" id="address" value="19035"
                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>

                        <div class="col-span-1">
                            <label for="officialWebsite" class="block text-sm font-medium text-gray-700">Official
                                Website</label>
                            <input type="text" id="officialWebsite" value="https://www.harvard.edu"
                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>

                        <div class="col-span-1">
                            <label for="contactEmail" class="block text-sm font-medium text-gray-700">Contact
                                Email</label>
                            <input type="email" id="contactEmail" value="admissions@harvard.edu"
                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>

                        <div class="col-span-1">
                            <label for="phoneNumber" class="block text-sm font-medium text-gray-700">Phone
                                Number</label>
                            <input type="text" id="phoneNumber" value="+1 (617) 495-1551"
                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>

                        <div class="flex justify-end">
                            <button
                                class="flex px-6 py-2 bg-blue-400 text-white text-center rounded-md gap-4 hover:bg-blue-600 ease-in-out cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                    class="bi bi-floppy" viewBox="0 0 16 16">
                                    <path d="M11 2H9v3h2z" />
                                    <path
                                        d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
                                </svg>
                                Save Changes
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="mx-auto space-y-8 mt-5">
            <div class="bg-white shadow overflow-hidden rounded-md p-5">
                <div>
                    <h2 class="text-2xl font-semibold text-gray-900">Description</h2>
                    <p class="mt-1 text-sm text-gray-500">Provide a compelling description of your
                        university</p>
                </div>
                <form action="" class="w-[100%] px-4 py-5 sm:p-6">
                    <div class="grid gap-6">

                        <div class="flex flex-col w-full">
                            <label for="description" class="block text-sm font-medium text-gray-700">Detail
                                Description</label>
                            <textarea type="text" id="universityName"
                                placeholder="Harvard University is devoted to excellence in teaching, learning, and research, and to developing leaders who make a difference globally. The University has twelve degree-granting Schools in addition to the Radcliffe Institute for Advanced Study."
                                class="mt-1 p-4 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>
                        <div class="flex flex-col w-full">
                            <label for="description" class="block text-sm font-medium text-gray-700">Mission</label>
                            <textarea type="text" id="universityName"
                                placeholder="To educate the citizens and citizen-leaders for our society. We do this through our commitment to the transformative power of a liberal arts and sciences education."
                                class="mt-1 p-4 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>
                    </div>

                    <div class="flex justify-end mt-5">
                        <button
                            class="flex px-6 py-2 bg-blue-400 text-white text-center rounded-md gap-4 hover:bg-blue-600 ease-in-out cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                class="bi bi-floppy" viewBox="0 0 16 16">
                                <path d="M11 2H9v3h2z" />
                                <path
                                    d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
                            </svg>
                            Save All Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>