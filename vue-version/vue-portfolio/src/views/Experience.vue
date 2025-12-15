<template>
  <div class="pt-[120px] py-[150px]">
    <div class="max-w-[1400px] mx-auto px-5">
      <div class="text-center mb-[100px]">
        <h2 class="text-4xl md:text-5xl font-bold mb-5">Experience</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Professional journey in technology and development
        </p>
      </div>

      <div class="space-y-[80px]">
        <div
          v-for="(exp, index) in experiences"
          :key="index"
          class="grid grid-cols-[200px_1fr] gap-16"
        >
          <div class="text-xl text-gray-600 font-medium pt-3">
            {{ exp.year }}
          </div>

          <div>
            <h3 class="text-3xl font-bold mb-3">{{ exp.title }}</h3>
            <h4 class="text-2xl text-gray-600 mb-6">{{ exp.company }}</h4>
            <ul class="text-lg text-gray-700 mb-8 max-w-2xl leading-relaxed space-y-3">
              <li
                v-for="(bullet, bulletIndex) in exp.description"
                :key="bulletIndex"
                class="flex items-start"
              >
                <span class="text-gray-400 mr-3 mt-1">•</span>
                <span>{{ bullet }}</span>
              </li>
            </ul>
            <div class="flex flex-wrap gap-4">
              <span
                v-for="(skill, skillIndex) in exp.skills"
                :key="skillIndex"
                class="text-gray-600"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Experience Section -->
      <div class="text-center mb-[100px] mt-[150px]">
        <h2 class="text-4xl md:text-5xl font-bold mb-5">Additional Experience</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Other professional roles and experiences
        </p>
      </div>

      <div class="space-y-[80px]">
        <div
          v-for="(exp, index) in additionalExperience"
          :key="`additional-${index}`"
          class="grid grid-cols-[200px_1fr] gap-16"
        >
          <div class="text-xl text-gray-600 font-medium pt-3">
            {{ exp.year }}
          </div>

          <div>
            <h3 class="text-3xl font-bold mb-3">{{ exp.title }}</h3>
            <h4 class="text-2xl text-gray-600 mb-6">{{ exp.company }}</h4>
            <ul class="text-lg text-gray-700 mb-8 max-w-2xl leading-relaxed space-y-3">
              <li
                v-for="(bullet, bulletIndex) in exp.description"
                :key="bulletIndex"
                class="flex items-start"
              >
                <span class="text-gray-400 mr-3 mt-1">•</span>
                <span>{{ bullet }}</span>
              </li>
            </ul>
            <div class="flex flex-wrap gap-4">
              <span
                v-for="(skill, skillIndex) in exp.skills"
                :key="skillIndex"
                class="text-gray-600"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Education Section -->
      <div class="text-center mb-[100px] mt-[150px]">
        <h2 class="text-4xl md:text-5xl font-bold mb-5">Education</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Academic foundation and continuous learning
        </p>
      </div>

      <div class="space-y-[80px]">
        <div
          v-for="(edu, index) in education"
          :key="`edu-${index}`"
          class="grid grid-cols-[200px_1fr] gap-16"
        >
          <div class="text-xl text-gray-600 font-medium pt-3">
            {{ edu.year }}
          </div>

          <div>
            <h3 class="text-3xl font-bold mb-3">{{ edu.degree }}</h3>
            <h4 class="text-2xl text-gray-600 mb-2">{{ edu.institution }}</h4>
            <p class="text-lg text-gray-500 mb-4">{{ edu.location }}</p>
            <ul class="text-lg text-gray-700 mb-6 max-w-2xl leading-relaxed space-y-3">
              <li
                v-for="(bullet, bulletIndex) in edu.description"
                :key="bulletIndex"
                class="flex items-start"
              >
                <span class="text-gray-400 mr-3 mt-1">•</span>
                <span>{{ bullet }}</span>
              </li>
            </ul>
            <div class="text-lg text-gray-600">
              <strong>GPA:</strong> {{ edu.gpa }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  data() {
    return {
        experiences: [
        {
          year: 'October 2023 — Present',
          title: 'Business Intelligence + Data Analytics Intern',
          company: 'Apple Montessori Schools',
          description: [
            'Automated KPI dashboards in PowerBI integrating HR, Finance, and enrollment data across 20+ schools, reducing manual reporting time by 50% and saving leadership 15+ hours monthly.',
            'Delivered real-time performance analytics that directly informed pricing strategy, staffing decisions, and market expansion planning.',
            'Integrated and cleaned 3+ years of data from multiple CRM systems and billing platforms, mapping full customer journey and identifying conversion bottlenecks that increased enrollment rates.',
            'Built predictive enrollment models tracking 20+ schools, improving forecasting accuracy by 50% and generating data-driven recommendations that reduced student attrition by 10%.',
            'Supported annual tuition and fee pricing analysis, organizing complex rate and policy data across 20+ sites, validating accuracy, and enabling timely updates for open enrollment.',
            'Streamlined the acquisition process, managing 150+ active targets, preliminary and accelerating go/no-go decisions.'
          ],
          skills: ['PowerBI', 'SQL', 'Excel', 'Python','Tableau','R','PowerPoint','Word']
        },
        {
          year: 'August 2025 — October 2025',
          title: 'UI/UX Designer',
          company: 'StartupXYZ',
          description: [
            'Led end-to-end web design projects for clients launching their first digital presence, leveraging Figma, Framer, Sketch and other online design tools to create visually compelling, mobile optimized, and high-converting websites.',
            'Applied UI/UX best practices to develop design systems, wireframes, and interactive prototypes that balanced usability, accessibility, and aesthetic appeal across devices and platforms.',
            'Designed and developed web interfaces grounded in human creativity, using AI tools solely to refine visual layouts, optimize responsiveness and enhance usability.',
            'Refined prototypes through multiple-round testing, evolving designs to improve user flow, reduce friction, and elevate anticipated conversion rates.',
            'Maintained a disciplined design workflow, applying version control, component libraries, and structured handoffs to streamline development and accelerate delivery timelines.'
          ],
          skills: ['Figma', 'Framer', 'Sketch', 'Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign']
        },
      ],
      additionalExperience: [
        {
          year: '2021 — 2022',
          title: 'Retail Associate',
          company: 'Fashion Boutique',
          description: [
            'Provided exceptional customer service and fashion consultation to diverse clientele.',
            'Managed inventory and visual merchandising displays to enhance shopping experience.',
            'Processed transactions and maintained accurate sales records.'
          ],
          skills: ['Customer Service', 'Retail Operations', 'Visual Merchandising']
        },
        {
          year: '2018 — 2019',
          title: 'Event Staff',
          company: 'Local Event Venue',
          description: [
            'Coordinated setup and breakdown for various events and exhibitions.',
            'Managed crowd control and ensured safety compliance during events.',
            'Provided excellent guest services and resolved issues promptly.'
          ],
          skills: ['Event Coordination', 'Customer Service', 'Problem Solving']
        }
      ],
      education: [
        {
          year: '2015 — 2019',
          degree: 'Bachelor of Science in Computer Science',
          institution: 'State University',
          location: 'New York, NY',
          description: [
            'Specialized in software development and data structures with a focus on web technologies.',
            'Completed capstone project developing a full-stack web application for local non-profit.',
            'Active member of computer science club and participated in hackathons.'
          ],
          gpa: '3.7/4.0'
        },
        {
          year: '2013 — 2015',
          degree: 'Associate Degree in Digital Media',
          institution: 'Community College',
          location: 'New York, NY',
          description: [
            'Focused on digital design principles, web development fundamentals, and creative software tools.',
            'Completed projects in UI/UX design, web development, and digital marketing.',
            'Awarded Dean\'s List for academic excellence.'
          ],
          gpa: '3.8/4.0'
        }
      ]
    }
  }
}
</script>

<script>
export default {
  name: 'Experience'
}
</script>
