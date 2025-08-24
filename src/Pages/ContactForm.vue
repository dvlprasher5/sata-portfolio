<template>
    <section class=" text-white py-16 mt-10">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">

            <!-- Left Column: Contact Form -->
            <div>
                <button class="bg-gray-900 border border-gray-700 px-4 py-1 rounded-full mb-4 hover:bg-gray-800">
                    Get in Touch
                </button>

                <h2 class="text-4xl font-bold mb-4">Have a question? Ask us!</h2>
                <p class="text-gray-400 mb-8">
                    Have questions, feedback, or service inquiries? We're here to listen and respond quickly.
                    Your input is important to us, and we look forward to connecting with you!
                </p>

                <form class="space-y-5">
                    <!-- Name & Email -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="flex flex-col">
                            <label for="name" class="mb-1 text-[16px] text-[#A8A8A8] ">Name</label>
                            <input id="name" type="text" placeholder="Jane Smith"
                                class="bg-[#202020] border  border-white/10  rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="flex flex-col">
                            <label for="email" class="mb-1 text-[16px] text-[#A8A8A8]">Email</label>
                            <input id="email" type="email" placeholder="jane@framer.com"
                                class="bg-[#202020] border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
                        </div>
                    </div>

                    <!-- Dropdown -->
                    <div class="flex flex-col">
                        <label for="subject" class="mb-1 text-[16px] text-[#A8A8A8]">What can we help with?</label>
                        <select id="subject"
                            class="bg-[#202020] border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500 text-gray-400">
                            <option value="">Select...</option>
                            <option value="support">Support</option>
                            <option value="sales">Sales</option>
                            <option value="feedback">Feedback</option>
                        </select>
                    </div>

                    <!-- Message -->
                    <div class="flex flex-col">
                        <label for="message" class="mb-1 text-[16px] text-[#A8A8A8]">Message</label>
                        <textarea id="message" placeholder="Hi!" rows="4"
                            class="bg-[#202020] border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"></textarea>
                    </div>


                    <!-- Submit Button -->
                    <button type="submit"
                        class="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2 rounded-lg w-full transition">
                        Submit
                    </button>
                </form>
            </div>

            <!-- Right Column: Google Map -->
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.933097223682!2d4.884051315801258!3d52.37021667978661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c3b2f6b6fb%3A0x65aeb74c2f4f2c9!2sFramer%20B.V.!5e0!3m2!1sen!2snl!4v1679059178350!5m2!1sen!2snl"
                    width="100%" height="590" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade" class="rounded-xl border border-gray-800"></iframe>
            </div>
        </div>
    </section>
</template>
