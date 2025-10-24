import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Home, Building2, PartyPopper, Wrench, Users, Calendar, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: Home,
      title: 'Home Services',
      description: 'Complete home maintenance, repairs, cleaning, and improvement services for your comfort.',
      features: ['Plumbing & Electrical', 'Cleaning Services', 'Carpentry & Painting', 'AC & Appliance Repair'],
      color: 'primary',
    },
    {
      icon: Building2,
      title: 'Society Management',
      description: 'Professional management solutions for residential societies and apartment complexes.',
      features: ['Facility Management', 'Security Services', 'Maintenance Planning', 'Financial Management'],
      color: 'accent',
    },
    {
      icon: PartyPopper,
      title: 'Event Services',
      description: 'End-to-end event planning and management for corporate and personal celebrations.',
      features: ['Wedding Planning', 'Corporate Events', 'Catering Services', 'Decoration & Setup'],
      color: 'primary',
    },
  ]

  return (
    <section id="services" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-accent font-semibold uppercase tracking-wide text-sm">Our Services</span>
          <h2 className="text-4xl font-bold text-foreground">
            Comprehensive Solutions for Every Need
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From home maintenance to large-scale event management, we provide expert services 
            tailored to your specific requirements.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group">
                <CardHeader>
                  <div className={`h-14 w-14 rounded-lg bg-${service.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className={`h-7 w-7 text-${service.color}`} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="w-full group-hover:bg-primary/10 group-hover:text-primary">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            { icon: Wrench, title: 'Expert Technicians', desc: 'Certified professionals for all services' },
            { icon: Users, title: 'Dedicated Support', desc: '24/7 customer assistance available' },
            { icon: Calendar, title: 'Flexible Scheduling', desc: 'Book services at your convenience' },
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 bg-secondary/50 rounded-xl">
              <div className="h-12 w-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                <item.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
