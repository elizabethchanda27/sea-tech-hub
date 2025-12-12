'use client'

import { useState } from 'react'
import { MessageCircle, MapPin, Navigation, Send, X, ArrowRight, FileText } from 'lucide-react'

export default function InteractiveTools() {
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([
    { role: 'assistant', content: 'Hello! I\'m here to help you navigate digital systems. How can I assist you today?' }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [transportationResults, setTransportationResults] = useState<Array<{name: string, address: string, phone: string, distance: string}>>([])
  const [showTransportation, setShowTransportation] = useState(false)

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage = { role: 'user' as const, content: inputMessage }
    setMessages([...messages, userMessage])
    
    // Simple chatbot responses
    const response = getChatbotResponse(inputMessage.toLowerCase())
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: response }])
    }, 500)

    setInputMessage('')
  }

  const getChatbotResponse = (message: string): string => {
    if (message.includes('mychart') || message.includes('health')) {
      return 'I can help you with MyChart! MyChart is a secure online portal for managing your healthcare. You can use it to view test results, schedule appointments, message your doctor, and request prescription refills. Would you like step-by-step instructions for creating an account or using a specific feature?'
    } else if (message.includes('medicaid') || message.includes('benefits')) {
      return 'I can help you with Medicaid and NC safety-net programs! You can apply online at ePASS.nc.gov, by phone at 1-866-719-0141, or in person at your local Department of Social Services office. What specific help do you need with your application?'
    } else if (message.includes('scam') || message.includes('fraud')) {
      return 'It\'s important to protect yourself from scams! Never share your personal information, passwords, or payment details with unsolicited callers or emails. Legitimate organizations won\'t demand immediate payment via gift cards or wire transfers. If you think you\'ve been scammed, report it to the FTC at reportfraud.ftc.gov. What specific scam are you concerned about?'
    } else if (message.includes('help') || message.includes('support')) {
      return 'I\'m here to help! I can assist you with MyChart, Medicaid applications, avoiding scams, basic digital skills, and finding community resources. What would you like to know more about?'
    } else if (message.includes('hello') || message.includes('hi')) {
      return 'Hello! I\'m here to help you navigate digital systems in North Carolina. I can help with MyChart, Medicaid, avoiding scams, and finding resources. What can I help you with today?'
    } else {
      return 'I understand you\'re looking for help. I can assist you with MyChart, Medicaid and benefits applications, avoiding scams, basic digital skills, and finding community resources. Could you tell me more specifically what you need help with?'
    }
  }

  const handleTransportationSearch = () => {
    // Simulated transportation search results
    const results = [
      { name: 'Raleigh-Durham International Airport', address: '2400 John Brantley Blvd, Morrisville, NC 27560', phone: '(919) 840-2123', distance: '12 miles' },
      { name: 'GoTriangle Transit Center', address: '430 W Morgan St, Raleigh, NC 27601', phone: '(919) 485-7433', distance: '5 miles' },
      { name: 'Durham Station', address: '515 W Pettigrew St, Durham, NC 27701', phone: '(919) 485-7433', distance: '8 miles' },
      { name: 'Chapel Hill Transit', address: '6900 Millhouse Rd, Chapel Hill, NC 27516', phone: '(919) 969-4900', distance: '15 miles' },
    ]
    setTransportationResults(results)
    setShowTransportation(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-earth-cream via-neutral-accent via-skin-tan to-earth-warm text-neutral-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Interactive Tools
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl">
            Get personalized help navigating digital systems with our chatbot and transportation widget
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Transportation Widget (external) */}
        <section className="bg-sage-pale rounded-lg shadow-md p-8 mb-8 border-2 border-sage-medium">
          <div className="flex items-center mb-4">
            <Navigation className="h-8 w-8 text-sage-medium mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Transportation Assistance</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Open the live transportation assistance tool tailored for SEA communities in NC.
          </p>
          <a
            href="https://sea-transporation-assistance.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-sage-medium text-white font-semibold rounded-lg shadow hover:bg-sage-medium/90 transition-colors"
          >
            Launch Transportation Tool
            <ArrowRight className="h-5 w-5 ml-2" />
          </a>
        </section>

        {/* Chatbot Section (external) */}
        <section className="bg-earth-cream rounded-lg shadow-md p-8 border-2 border-earth-tan mb-10">
          <div className="flex items-center mb-4">
            <MessageCircle className="h-8 w-8 text-earth-warm mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Digital Navigation Chatbot</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Use the live MyChart-friendly support chatbot built for SEA communities.
          </p>
          <a
            href="https://sea-friendly-support-chatbot.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-earth-warm text-white font-semibold rounded-lg shadow hover:bg-earth-medium transition-colors"
          >
            Open Support Chatbot
            <ArrowRight className="h-5 w-5 ml-2" />
          </a>
        </section>

        {/* Figma Redesign Links */}
        <section className="bg-neutral-pale rounded-lg shadow-md p-8 border-2 border-neutral-medium">
          <div className="flex items-center mb-4">
            <FileText className="h-8 w-8 text-neutral-accent mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">MyChart Redesign (SEA Communities)</h2>
          </div>
          <p className="text-gray-700 mb-4">
            View the design and interactive prototype created for SEA families in North Carolina.
          </p>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Changes in the Redesign:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Added more language options</li>
              <li>Chatbot features: Chat session (questions/clarification/etc), Request an interpreter in the selected language</li>
              <li>&ldquo;What does this mean&rdquo; button in test result section</li>
              <li>Ask who is managing this when person is invited, so if someone younger than 18 is managing, there is a lot more directions for someone managing it for someone older</li>
              <li>&ldquo;How to&rdquo; button on each tab (widgets/sections), step by step</li>
              <li>Restructured widgets and added reminders section, especially for older SEA elders</li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.figma.com/design/pwz5BZ8wlrBA8TzJnBUidO/MyChart-Redesign---SEA-Communities-in-NC?node-id=3-3&m=dev&t=tuWqMnzzgFo0E8NI-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-neutral-dark font-semibold rounded-lg shadow hover:bg-neutral-pale transition-colors border border-neutral-medium"
            >
              View Design File
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
            <a
              href="https://www.figma.com/proto/pwz5BZ8wlrBA8TzJnBUidO/MyChart-Redesign-SEA-Communities-in-NC?node-id=3-3&t=tuWqMnzzgFo0E8NI-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-neutral-accent text-white font-semibold rounded-lg shadow hover:bg-neutral-accent/90 transition-colors"
            >
              View Prototype
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

