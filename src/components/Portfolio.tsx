import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import nuveenImage1 from 'figma:asset/1d3525b456e7d9cc47e87d3ec3a9dd1f7d49a177.png';
import nuveenImage2 from 'figma:asset/9a106f56b3b522ac084edbe8ad1d901c6455c7cf.png';
import broadridgeImage from 'figma:asset/adfb6539afc13603b0400de7dbdf936939693236.png';
import biomassImage from 'figma:asset/e5c3022d007695e998a7c05ed5e1feebfdd29b65.png';
import renewablesImage from 'figma:asset/e95031712dde9ec987813e86a3c3b90ebb5a9c42.png';

interface PortfolioItem {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export function Portfolio() {
  const navigate = useNavigate();
  
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      slug: 'ibm-environmental',
      title: 'Above Ground Biomass-Geospatial Analytics Project',
      category: 'UX Design • Design Thinking • AI',
      description: 'Led the design team in defining user needs, aligning cross-functional stakeholders, and shaping an intuitive, AI-powered AGB experience that enabled ESG and portfolio managers to make confident, data-driven carbon investment decisions.',
      image: biomassImage,
    },
    {
      id: 2,
      slug: 'maximo-asset',
      title: 'Renewables Forecasting Project',
      category: 'UX Design • User Research',
      description: 'Designed comprehensive asset lifecycle management system with predictive maintenance and IoT integration',
      image: renewablesImage,
    },
    {
      id: 3,
      slug: 'watson-ai',
      title: 'UX for AI',
      category: 'AI/UX Research • IBM',
      description: 'Co-authored UX for AI Principles and integrated Watson AI capabilities across enterprise product suite',
      image: 'https://images.unsplash.com/photo-1762330918491-f4288a62adb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHdhdHNvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyODExNjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 4,
      slug: 'broadridge-advisor',
      title: 'Broadridge Advisor Platform',
      category: 'UX/UI Design • Broadridge',
      description: 'Redesigned financial advisor workflows to streamline client onboarding and portfolio management operations',
      image: broadridgeImage,
    },
    {
      id: 5,
      slug: 'nuveen-digital',
      title: 'Nuveen Digital Experience',
      category: 'UX/UI Design • Nuveen',
      description: 'Created interactive digital experiences and marketing materials for investment products and services',
      image: nuveenImage2,
    },
    {
      id: 6,
      slug: 'nuveen-campaign',
      title: 'Nuveen Focus on Income Campaign',
      category: 'Brand Design • Nuveen',
      description: 'Led comprehensive campaign design with interactive presentations and investor education materials',
      image: nuveenImage1,
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl mb-16 border-b border-gray-200 pb-4">Portfolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/project/${item.slug}`)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-white mb-4 aspect-[4/3]">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <p className="text-xs tracking-wider text-gray-500 uppercase">{item.category}</p>
                <h3 className="text-lg md:text-xl group-hover:text-gray-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
