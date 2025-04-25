<script lang="ts" setup>
import { ref } from 'vue';

const activeTab = ref('Programs');
</script>

<template>
    <div class="flex bg-gray-100 min-h-screen p-4">

        <main class="flex-1">
            <header class="flex justify-between items-center bg-gray-200 p-2">
                <div class="px-5">
                    <h2 class="text-xl font-semibold text-blue-600">University Dashboard</h2>
                    <p class="text-blue-500 text-sm">Harvard University</p>
                </div>

                <div class="flex items-center gap-5 ">
                    <div class="flex items-center justify-center px-3 py-4 bg-white shadow-md rounded-lg">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                class="bi bi-bell" viewBox="0 0 16 16">
                                <path
                                    d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                            </svg>
                        </div>
                    </div>

                    <div class="flex flex-col align-center mr-8 bg-white shadow-md rounded-lg py-1 px-3">
                        <h1 class="font-semibold text-gray-500">Harvard University</h1>
                        <p class="text-md text-gray-500">Admin</p>
                    </div>
                </div>
            </header>

            <section v-if="activeTab === 'Programs'">
                <div class="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between">
                        <div class="flex items-center gap-3">
                            <a href="" class="flex items-center justify-center rounded-md px-4 py-3 bg-white shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                                </svg>
                            </a>
                            <div>
                                <h1 class="text-xl font-bold">Computer Science</h1>
                                <ul>
                                    <li>Bachelor's Degree • School of Engineering and Applied Sciences</li>
                                </ul>
                            </div>
                        </div>

                        <div class="flex items-center gap-5">
                            <button
                                class="flex items-center gap-1 border-1 border-blue-400 rounded-md py-2 px-4 text-blue-500 hover:bg-gray-200 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                    class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path
                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fill-rule="evenodd"
                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                </svg>
                                <p class="text-sm font-semibold">
                                    Edit Program
                                </p>
                            </button>

                            <button
                                class="flex items-center gap-1 border-1 border-red-400 rounded-md py-2 px-4 text-red-500 hover:bg-red-100 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                    class="bi bi-trash3" viewBox="0 0 16 16">
                                    <path
                                        d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                </svg>
                                <p class="text-sm font-semibold">
                                    Delete
                                </p>
                            </button>
                        </div>
                    </div>

                    <div class="flex gap-6 mt-5">
                        <div class="w-full bg-white rounded-lg shadow-md p-6">
                            <h2 class="text-2xl font-semibold text-gray-800 mb-1">Program Overview</h2>
                            <p class="text-gray-600 mb-4 text-sm font-semibold">Comprehensive details about the Computer
                                Science
                                program</p>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-700 mb-1">Description</h3>
                                <p class="text-gray-600 mb-4 text-sm">
                                    A comprehensive program covering algorithms, software engineering, and computer
                                    systems.
                                    Students will learn programming languages, data structures, computer architecture,
                                    and
                                    software development methodologies. The program includes hands-on projects,
                                    internships,
                                    and research opportunities.
                                </p>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-700 mb-1">Admission Requirements</h3>
                                <p class="text-gray-600 mb-4 text-sm">High school diploma, SAT/ACT scores, strong math
                                    background</p>
                            </div>
                            <div class="mb-2">
                                <h3 class="text-lg font-semibold text-gray-700 mb-1">Career Outlook</h3>
                                <p class="text-gray-600 text-sm mb-1">
                                    Graduates pursue careers as software engineers, data scientists, systems analysts,
                                    and IT
                                    consultants.
                                </p>
                                <p class="text-green-500 font-semibold text-sm">The employment rate within 6 months of
                                    graduation is 94%.</p>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-700 mb-1">Accreditation</h3>
                                <p class="text-gray-600 text-sm">Accredited by the Computing Accreditation Commission of
                                    ABET</p>
                            </div>
                        </div>

                        <div class="bg-white rounded-lg shadow-md p-6">
                            <h2 class="text-xl font-semibold text-gray-800 mb-4">Program Details</h2>
                            <div class="grid grid-cols-2 gap-y-2 text-sm">
                                <div>
                                    <p class="text-gray-700 font-semibold">Status</p>
                                </div>
                                <div>
                                    <span
                                        class="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                                        Active
                                    </span>
                                </div>
                                <div>
                                    <p class="text-gray-700 font-semibold">Department</p>
                                </div>
                                <div>
                                    <p class="text-gray-600">School of Engineering and Applied Sciences</p>
                                </div>
                                <div>
                                    <p class="text-gray-700 font-semibold">Duration</p>
                                </div>
                                <div>
                                    <p class="text-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block mr-1">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        4 years
                                    </p>
                                </div>
                                <div>
                                    <p class="text-gray-700 font-semibold">Tuition</p>
                                </div>
                                <div>
                                    <p class="text-gray-600">$51,925/year</p>
                                </div>
                                <div>
                                    <p class="text-gray-700 font-semibold">Application Deadline</p>
                                </div>
                                <div>
                                    <p class="text-gray-600">1/1/2024</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-3 bg-white shadow-md rounded-md mt-5 p-4">
                        <div>
                            <h1 class="text-2xl font-semibold text-gray-800 mb-1">Program Carriculum</h1>
                            <p class="text-gray-600 mb-4 text-sm font-semibold">Course structures and requirements</p>
                        </div>

                        <div>
                            <h1 class="font-semibold text-lg">Year 1</h1>
                            <ul class="list-disc ml-10">
                                <li>Introduction to Computer Science</li>
                                <li>Discrete Mathematics</li>
                                <li>Calculus I & II</li>
                                <li>Introduction to Programming</li>
                                <li>Digital Logic Design</li>
                                <li>General Education Requirements</li>
                            </ul>
                        </div>

                        <div>
                            <h1 class="font-semibold text-lg">Year 2</h1>
                            <ul class="list-disc ml-10">
                                <li>Data Structures and Algorithms</li>
                                <li>Computer Architecture</li>
                                <li>Linear Algebra</li>
                                <li>Object-Oriented Programming</li>
                                <li>Probability and Statistics</li>
                                <li>General Education Requirements</li>
                            </ul>
                        </div>

                        <div>
                            <h1 class="font-semibold text-lg">Year 3</h1>
                            <ul class="list-disc ml-10">
                                <li>Operating Systems</li>
                                <li>Database Systems</li>
                                <li>Software Engineering</li>
                                <li>Computer Networks</li>
                                <li>Theory of Computation</li>
                                <li> Technical Electives</li>
                            </ul>
                        </div>

                        <div>
                            <h1 class="font-semibold text-lg">Year 4</h1>
                            <ul class="list-disc ml-10">
                                <li>Artificial Intelligence</li>
                                <li>Computer Graphics</li>
                                <li>Senior Design Project</li>
                                <li>Ethics in Computing</li>
                                <li>Technical Electives</li>
                                <li>General Education Requirements</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>