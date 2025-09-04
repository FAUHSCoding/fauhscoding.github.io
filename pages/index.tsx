import React, { useState } from 'react'
import { 
  Code, 
  MapPin, 
  Clock, 
  Users, 
  ExternalLink, 
  Zap, 
  Trophy, 
  Cpu, 
  Calendar,
  ChevronRight,
  Star,
  Globe,
  Rocket,
  Monitor,
  Brain,
  Award,
  Gift,
  MessageCircle
} from 'lucide-react'
import DarkModeToggle from '../components/DarkModeToggle'

interface WeeklyActivity {
  id: string
  title: string
  description: string
  icon: React.ComponentType<any>
  type: 'intro' | 'advanced' | 'competition' | 'social'
}

const weeklyActivities: WeeklyActivity[] = [
  {
    id: 'intro-coding',
    title: 'Intro to Vibe Coding',
    description: 'Learn MCP, LangChain, GitHub Copilot, and other AI-augmented coding tools',
    icon: Brain,
    type: 'intro'
  },
  {
    id: 'supercomputer',
    title: 'FAU Supercomputer Access',
    description: 'Master SLURM, job scripts, and OnDemand dashboard on FAU\'s HPC cluster',
    icon: Monitor,
    type: 'advanced'
  },
  {
    id: 'hackathons',
    title: 'Hackathon Training',
    description: 'Prepare for competitions through Hack Club, MLH, and Devpost',
    icon: Trophy,
    type: 'competition'
  },
  {
    id: 'projects',
    title: 'Project Building',
    description: 'Build cool projects and get free stuff through YSWS program',
    icon: Rocket,
    type: 'intro'
  },
  {
    id: 'workshops',
    title: 'Tech Workshops',
    description: 'Weekly hands-on coding workshops covering various technologies',
    icon: Code,
    type: 'intro'
  },
  {
    id: 'networking',
    title: 'Community & Networking',
    description: 'Connect with other coders and join the global Hack Club community',
    icon: Users,
    type: 'social'
  }
]

const features = [
  {
    icon: Award,
    title: 'Official Hack Club Chapter',
    description: 'We\'re working on our own 501(c)(3) status through Hack Club\'s network'
  },
  {
    icon: Globe,
    title: 'Full Travel Compensation',
    description: 'Get fully funded trips to Hack Club hackathons around the world'
  },
  {
    icon: Gift,
    title: 'Free Hardware & Resources',
    description: 'Earn free stuff for building cool projects through YSWS (You Ship, We Ship)'
  },
  {
    icon: Cpu,
    title: 'FAU Supercomputer Access',
    description: 'Learn to use high-performance computing resources for your projects'
  },
  {
    icon: Trophy,
    title: 'Competitive Programming',
    description: 'Compete in hackathons through Hack Club, MLH, and Devpost platforms'
  },
  {
    icon: Zap,
    title: 'Cutting-Edge Tools',
    description: 'Master modern AI coding tools like MCP, LangChain, and GitHub Copilot'
  }
]

export default function Home() {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white dark:bg-hc-dark transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-hc-dark border-b border-gray-100 dark:border-hc-darkless sticky top-0 z-50 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-hc-red rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-900 dark:text-white font-bold text-lg tracking-tight">FAU Coding Club</span>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-hc-red dark:hover:text-hc-red font-medium transition-colors duration-200">
                About
              </a>
              <a href="#activities" className="text-gray-700 dark:text-gray-300 hover:text-hc-red dark:hover:text-hc-red font-medium transition-colors duration-200">
                Activities
              </a>
              <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-hc-red dark:hover:text-hc-red font-medium transition-colors duration-200">
                Features
              </a>
              <DarkModeToggle />
              <a href="#join" className="bg-hc-red text-white px-4 py-2 rounded-lg font-medium hover:bg-hc-red/90 transition-all duration-200 shadow-sm hover:shadow-md">
                Join Us
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <DarkModeToggle />
              <button className="p-2 text-gray-700 dark:text-gray-300 hover:text-hc-red dark:hover:text-hc-red transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-hc-snow via-white to-hc-smoke dark:from-hc-darkless dark:via-hc-dark dark:to-hc-darker py-20 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-hc-red/10 text-hc-red px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Star className="w-4 h-4" />
              <span>Official Hack Club Chapter</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-hc-black dark:text-white mb-6 animate-fade-in-up transition-colors duration-300">
              FAU Coding Club
              <span className="block gradient-text">for High School Students</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-hc-slate dark:text-hc-muted mb-8 max-w-3xl mx-auto animate-fade-in transition-colors duration-300">
              Join fellow high school coders in Boca Raton for virtual meetings, 
              cutting-edge tech workshops, and epic hackathon adventures.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
              <div className="flex items-center space-x-2 text-hc-muted dark:text-hc-muted">
                <MapPin className="w-5 h-5" />
                <span>Boca Raton, FL (Virtual Meetings)</span>
              </div>
              <div className="flex items-center space-x-2 text-hc-muted dark:text-hc-muted">
                <Clock className="w-5 h-5" />
                <span>Weekly • Day TBD • 6-7 PM</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeNvGlDOOH0hfegAQyI2ROafTluhOvc5DDGKhsjfsIPq_-9jA/viewform?usp=dialog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Sign Up</span>
                <ChevronRight className="w-5 h-5" />
              </a>
              <a 
                href="https://discord.gg/5W7BjxY39x" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Join our Discord Server</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-hc-cyan/20 rounded-full animate-bounce-gentle"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-hc-orange/20 rounded-full animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-hc-green/20 rounded-full animate-bounce-gentle" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Weekly Activities Section */}
      <section id="activities" className="py-20 bg-white dark:bg-hc-dark transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-hc-black dark:text-white mb-6 transition-colors duration-300">
              Weekly <span className="gradient-text">Activities</span>
            </h2>
            <p className="text-xl text-hc-slate dark:text-hc-muted max-w-3xl mx-auto transition-colors duration-300">
              Every week brings new coding challenges, learning opportunities, and ways to level up your skills. 
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {weeklyActivities.map((activity, index) => (
              <div 
                key={activity.id}
                className={`bg-white dark:bg-hc-darkless p-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 cursor-pointer ${selectedActivity === activity.id ? 'ring-2 ring-hc-red' : ''}`}
                onClick={() => setSelectedActivity(selectedActivity === activity.id ? null : activity.id)}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start space-x-4">
                  <div className={`
                    w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0
                    ${activity.type === 'intro' ? 'bg-hc-green/10 text-hc-green' : ''}
                    ${activity.type === 'advanced' ? 'bg-hc-blue/10 text-hc-blue' : ''}
                    ${activity.type === 'competition' ? 'bg-hc-red/10 text-hc-red' : ''}
                    ${activity.type === 'social' ? 'bg-hc-purple/10 text-hc-purple' : ''}
                  `}>
                    <activity.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-hc-black dark:text-white mb-2 transition-colors duration-300">{activity.title}</h3>
                    <p className="text-hc-slate dark:text-hc-muted text-sm leading-relaxed transition-colors duration-300">{activity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-hc-muted dark:text-hc-muted transition-colors duration-300">
              Activities may change based on member feedback and interests. 
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-hc-snow dark:bg-hc-darkless transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-hc-black dark:text-white mb-6 transition-colors duration-300">
              Why Join <span className="gradient-text">FAU Coding Club?</span>
            </h2>
            <p className="text-xl text-hc-slate dark:text-hc-muted max-w-3xl mx-auto transition-colors duration-300">
              We offer unique opportunities through our Hack Club affiliation and FAU partnership.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-hc-dark p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-hc-red to-hc-orange rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-hc-black dark:text-white mb-4 transition-colors duration-300">{feature.title}</h3>
                <p className="text-hc-slate dark:text-hc-muted leading-relaxed transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Hack Club Section */}
      <section className="py-20 bg-white dark:bg-hc-dark transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-hc-red text-white px-6 py-3 rounded-full mb-8">
              <Globe className="w-5 h-5" />
              <span className="font-medium">Part of the Global Hack Club Network</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-hc-black dark:text-white mb-8 transition-colors duration-300">
              Connected to <span className="gradient-text">Something Bigger</span>
            </h2>
            
            <p className="text-xl text-hc-slate dark:text-hc-muted mb-8 leading-relaxed transition-colors duration-300">
              As an official Hack Club chapter, we're part of a global community of teenage hackers 
              who code together, ship amazing projects, and support each other's growth. Through this 
              network, we're working toward establishing our own 501(c)(3) nonprofit status.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-hc-red mb-2">1000+</div>
                <div className="text-hc-slate dark:text-hc-muted transition-colors duration-300">Hack Clubs Worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-hc-orange mb-2">100+</div>
                <div className="text-hc-slate dark:text-hc-muted transition-colors duration-300">Countries Represented</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-hc-green mb-2">$40M+</div>
                <div className="text-hc-slate dark:text-hc-muted transition-colors duration-300">In Grants & Resources</div>
              </div>
            </div>
            
            <div className="mt-12">
              <a 
                href="https://hackclub.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center space-x-2"
              >
                <span>Explore Hack Club</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Start Coding?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Join FAU Coding Club and become part of an amazing community of high school developers, 
              makers, and innovators. No experience required – just bring your curiosity!
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <a 
                href="https://forms.google.com/your-signup-form" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-hc-blue font-bold py-4 px-8 rounded-full hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
              >
                <Users className="w-5 h-5" />
                <span>Join the Club</span>
              </a>
              <a 
                href="https://forms.google.com/your-interest-form" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-hc-blue transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Get Updates</span>
              </a>
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-hc-black dark:bg-hc-darker text-white py-12 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-hc-red rounded-full flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">FAU Coding Club</span>
              </div>
              <p className="text-hc-muted text-sm">
                Empowering high school students in Boca Raton through code, 
                community, and endless possibilities.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#about" className="block text-hc-muted hover:text-white transition-colors">About</a>
                <a href="#activities" className="block text-hc-muted hover:text-white transition-colors">Activities</a>
                <a href="#features" className="block text-hc-muted hover:text-white transition-colors">Features</a>
                <a href="https://hackclub.com/" className="block text-hc-muted hover:text-white transition-colors">Hack Club</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Get Connected</h4>
              <div className="space-y-2 text-sm">
                <a href="https://discord.gg/qWZNEtZ4Zv" className="block text-hc-muted hover:text-white transition-colors">Discord Server</a>
                <a href="https://hackclub.com/slack" className="block text-hc-muted hover:text-white transition-colors">Hack Club Slack</a>
                <a href="https://github.com/FAUHSCoding" className="block text-hc-muted hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-hc-darkless mt-8 pt-8 text-center text-sm text-hc-muted">
            <p>&copy; 2025 FAU Coding Club. Proudly affiliated with Florida Atlantic University.</p>
            <p className="mt-2">No longer affiliated with FAUHS. Official Hack Club chapter working toward 501(c)(3) status.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
