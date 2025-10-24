import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
      title: 'Home Renovation',
      category: 'Home Services',
    },
    {
      url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=600&fit=crop',
      title: 'Modern Living',
      category: 'Interior Design',
    },
    {
      url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop',
      title: 'Event Setup',
      category: 'Event Management',
    },
    {
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=500&fit=crop',
      title: 'Property Management',
      category: 'Society Services',
    },
    {
      url: 'https://images.unsplash.com/photo-1519167758481-83f29da8ae39?w=600&h=400&fit=crop',
      title: 'Team Celebration',
      category: 'Corporate Events',
    },
    {
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=600&fit=crop',
      title: 'Home Cleaning',
      category: 'Cleaning Services',
    },
  ]

  return (
    <section id="gallery" ref={ref} className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-accent font-semibold uppercase tracking-wide text-sm">Our Work</span>
          <h2 className="text-4xl font-bold text-foreground">
            Recent Projects & Success Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of completed projects and see the quality of work 
            that has made us a trusted name in the industry.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
              style={{
                gridRow: index === 1 || index === 5 ? 'span 2' : 'span 1',
              }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-accent text-sm font-semibold mb-2">{image.category}</span>
                <h3 className="text-white text-xl font-bold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
