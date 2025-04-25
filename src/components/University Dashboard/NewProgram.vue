<script lang="ts" setup>
</script>

<template>
    <div class="flex items-center justify-center mt-5">
        <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-semibold text-gray-800">Add New Academic Program</h2>
            </div>
            <p class="text-sm text-gray-600 mb-4">Enter the details of the new academic program. Click save when you're
                done.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label for="programName" class="block text-gray-700 text-sm font-bold mb-2">Program Name</label>
                    <input type="text" id="programName" placeholder="e.g., Computer Science"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div>
                    <label for="programType" class="block text-gray-700 text-sm font-bold mb-2">Program Type</label>
                    <div class="relative">
                        <select id="programType"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8">
                            <option disabled value="">Select type</option>
                            <option value="bachelor">Bachelor</option>
                            <option value="master">Master</option>
                            <option value="phd">Doctor</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div>
                    <label for="duration" class="block text-gray-700 text-sm font-bold mb-2">Duration</label>
                    <input type="text" id="duration" placeholder="e.g., 4 years"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div>
                    <label for="tuition" class="block text-gray-700 text-sm font-bold mb-2">Tuition ($)</label>
                    <input type="number" id="tuition" placeholder="e.g., 51925"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
            </div>

            <div class="mb-4">
                <label for="description" class="block text-gray-700 text-sm font-bold mb-2">Description</label>
                <textarea id="description" placeholder="Provide a detailed description of the program"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"></textarea>
            </div>

            <div class="mb-4">
                <label for="admissionRequirements" class="block text-gray-700 text-sm font-bold mb-2">Admission
                    Requirements</label>
                <textarea id="admissionRequirements" placeholder="List the requirements for admission to this program"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"></textarea>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label for="applicationDeadline" class="block text-gray-700 text-sm font-bold mb-2">Application
                        Deadline</label>
                    <div class="relative">
                        <input type="date" id="applicationDeadline"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg class="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 10-2 0v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 10-2 0zM5 8a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div>
                    <label for="status" class="block text-gray-700 text-sm font-bold mb-2">Status</label>
                    <div class="relative">
                        <select id="status"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8">
                            <option value="draft">Draft</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-end gap-4">
                <button class="border-1 bg-white border-gray-300 py-1.5 px-3 rounded-md shadow-md hover:bg-gray-100 cursor-pointer">Cancel</button>
                <button  class="bg-blue-400 text-white py-1.5 px-3 rounded-md shadow-md hover:bg-blue-500 cursor-pointer">Save Program</button>
            </div>
        </div>
    </div>
</template>