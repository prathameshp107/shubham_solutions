import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Clock, ThumbsUp, DollarSign, HeadphonesIcon, Award } from 'lucide-react'

export function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const reasons = [
    {
      icon: Shield,
      title: 'Trusted & Secure',
      description: 'Verified professionals with background checks and insurance coverage for your peace of mind.',
    },
    {
      icon: Clock,
      title: 'On-Time Service',
      description: 'Punctual service delivery with real-time tracking and updates on service progress.',
    },
    {
      icon: ThumbsUp,
      title: 'Quality Guaranteed',
      description: '100% satisfaction guarantee with quality checks and post-service support.',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden charges. Clear pricing with detailed breakdowns before service begins.',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to address your queries and concerns anytime.',
    },
    {
      icon: Award,
      title: 'Experienced Team',
      description: 'Skilled professionals with years of experience delivering exceptional results.',
    },
  ]

  return (
    <section id="why-choose-us" ref={ref} className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-accent font-semibold uppercase tracking-wide text-sm">Why Choose Us</span>
          <h2 className="text-4xl font-bold text-foreground">
            What Makes Us Different
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We go beyond just providing services. We build lasting relationships through 
            trust, quality, and exceptional customer experience.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary group"
            >
              <div className="flex items-start space-x-4">
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <reason.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center bg-primary rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h3>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of satisfied customers who trust us for their service needs.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  )
}
