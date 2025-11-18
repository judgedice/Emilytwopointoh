import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, Expand, ArrowUp, Play, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import environmentalImage from 'figma:asset/709fc27ca422e0a6b8c515b0ad804126461522b2.png';
import italyImage from 'figma:asset/26b3a6a6ae3e11685a2dc48b44256cd3ddb36923.png';
import processImage1 from 'figma:asset/e50baf020a11489c0ebbd97375a586c07a4cc532.png';
import processImage2 from 'figma:asset/9f415a7518a7c5f051e43df3a9f9c8799037d18b.png';
import personaImage from 'figma:asset/c584ff55c005d97696bf632ce82167f26a3ffce1.png';
import lidarImage from 'figma:asset/44339b869ed5b6f2bdd0917b91be29cfeba03d58.png';
import histogramImage from 'figma:asset/9d49d5cde9a6aafb7b09537b4debaf2c4a29fd50.png';
import carbonDataImage from 'figma:asset/56c07f18be52b5ad8b4e8bb449f64210134964be.png';
import explainabilityImage from 'figma:asset/2dd1630e5e45f2fbc299dadb3159141e7b22312f.png';
import renewablesHeroImage from 'figma:asset/e95031712dde9ec987813e86a3c3b90ebb5a9c42.png';
import competitorAnalysisImage from 'figma:asset/39769696a3845653d2234dd036a8f85e43df539b.png';
import competitorAnalysisModalImage from 'figma:asset/48504d8056e247792d1c7a5e12f2b8670e2b535e.png';
import weatherDashboardImage from 'figma:asset/35df6ed5982dcc065156e9b811b53e6a702ef5ce.png';
import energyDashboardImage from 'figma:asset/39f75985c1d3f300cbb95702d059b81fd999d796.png';
import operationsDashboardImage from 'figma:asset/00a50972352ccb5e7815dc832c897ee49eba0f39.png';
import workQueuesImage from 'figma:asset/100854b0c6c5657d965be3af91a37294e6241edd.png';
import sustainabilityAwardImage from 'figma:asset/b4e5f3a0f85d789571822a6e8bda042c358d6662.png';
import uxForAiImage from 'figma:asset/b56139bbdfdbc56770b56733587382974c68f576.png';
import uxPrinciplesHeaderImage from 'figma:asset/aa7ea038784e3d4a7a89e7a55055b8c309f3213f.png';
import uxpaLogo from 'figma:asset/a415df67883beccd5b2de5ea2d5158f214951446.png';

interface Quote {
  text: string;
  author?: string;
}

interface ProjectData {
  id: string;
  title: string;
  category: string;
  year: string;
  role: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  responsibilities: string[];
  quotes: Quote[];
}

const projectsData: Record<string, ProjectData> = {
  'ibm-environmental': {
    id: 'ibm-environmental',
    title: 'Above Ground Biomass-Geospatial Analytics Project',
    category: 'UX Design',
    year: '2024',
    role: 'Senior UX Design Manager',
    client: 'IBM',
    description: 'In order to offset carbon output, companies calculate an area\'s above ground biomass (all living plant matter above the soil) to determine how much carbon the biomass will naturally reclaim. (Carbon Sequestration)',
    challenge: 'The design team was tasked with defining how users, especially ESG and portfolio managers, could meaningfully engage with Above Ground Biomass (AGB) data to guide investment and monitoring decisions. This meant uncovering high-value use cases, clarifying user personas, and mapping intuitive end-to-end flows. They were also asked to leverage the Environmental Intelligence Suite 2.0\'s dashboarding capabilities to give users clear visibility into carbon content across their portfolios, compare multiple locations, and use historical trends to inform action.\n\nLooking ahead, the team began shaping a longer-term vision that includes predictive insights and more robust reporting needs based off AI foundation models.',
    solution: 'I encouraged my team to use the Product Develop Lifecycle(PDLC) model to begin the discovery process. I lead an alignment workshop with the cross functional team (UXD/UXR/PM/Dev) to identify product opportunities with commercial viability.',
    impact: [
      'Stricter environmental regulations in Europe—especially the EU Deforestation Regulation—created strong market pull, and after launch the AGB solution quickly won adoption from two leading MRV providers and companies preparing for EUDR, driving early revenue and accelerating data usage.',
      'As customers validate the accuracy and value of the data, we\'re planning enhanced features that open doors to adjacent markets and unlock meaningful upsell opportunities across the broader Sustainability Software portfolio.',
    ],
    responsibilities: [
      'Led end-to-end UX design for core platform features',
      'Conducted user research with enterprise clients across multiple industries',
      'Created design systems and component libraries for scalable development',
      'Collaborated with AI/ML teams to design intuitive data visualization',
      'Facilitated design workshops with cross-functional stakeholders',
    ],
    quotes: [
      {
        text: "Emily's ability to lead cross-functional workshops, drive alignment, and step outside her lane to move projects forward made her an invaluable asset to our organization.",
        author: 'Erin Buonomo - Executive Director of Product Design, IBM',
      },
      {
        text: "Emily's communication style is clear, objective, collaborative and supportive. She provides feedback that is both actionable and data-informed, ensuring design decisions are grounded in evidence while encouraging creativity.",
        author: 'Mary Attridge - Content Designer',
      },
    ],
  },
  'maximo-asset': {
    id: 'maximo-asset',
    title: 'Renewables Forecasting Project',
    category: 'Product Design',
    year: '2020-2023',
    role: 'Senior UX Designer',
    client: 'IBM',
    description: '',
    challenge: '<p>Energy companies around the world were struggling with the growing unpredictability of climate-driven weather events. Public weather data was too coarse and inconsistent, updating too slowly to guide critical operations. Customers needed a forecasting solution that would:</p><ul><li>Deliver <strong>high-accuracy, high-frequency</strong> renewable energy forecasts,</li><li>Integrate seamlessly into their existing workflow and operational systems,</li><li>Improve maintenance scheduling and operational safety,</li><li>Scale across large and diverse wind and solar portfolios, and</li><li>Visualize performance metrics in customizable dashboards tailored to business needs.</li></ul><p>The core ask became clear: <strong>build a scalable, AI-driven forecasting platform that empowers asset managers to make fast, confident, safe, and cost-effective decisions.</strong></p>',
    solution: '<p>We began by deeply understanding the operational pressures of maintenance planners, asset managers, and grid operators. Through interviews, workflow observations, and co-design sessions, we identified key pain points: scattered systems, safety risks, reliance on low-quality public data, and the need for precise, real-time insights.</p><p style="margin-top: 2rem;">Working with research, I lead our team through a competitive analysis workshop where we identified target competitors to understand capability expectations as we started to construct our solution.</p>',
    impact: [
      'The largest renewable company in Brazil achieved a <strong>30%</strong> improvement in solar accuracy and <strong>15%</strong> improvement in wind accuracy, transforming maintenance planning and strategic operations.',
      'A major energy provider in India reached <strong>92–94%</strong> accuracy in day-ahead forecasting, significantly reducing regulatory penalties.',
      'A Texas utility realized <strong>~95%</strong> accuracy, generating <strong>$2–4 million</strong> per year in potential savings from improved scheduling and energy balancing.',
      'Across customers, improved forecasting accuracy has led to safer maintenance windows, reduced downtimes, more stable grid operations, and meaningful cost reductions.',
    ],
    responsibilities: [
      'Led end-to-end UX strategy and design for core Maximo platform features across web and mobile',
      'Conducted extensive field research with maintenance teams across multiple industries and geographic regions',
      'Designed mobile-first workflows for field technicians working in challenging environments with limited connectivity',
      'Created design system and component library adopted across the entire Maximo product family',
      'Collaborated with IoT and AI teams to design intuitive interfaces for sensor data visualization and predictive analytics',
      'Led cross-functional design workshops and usability testing sessions with real maintenance teams',
    ],
    quotes: [
      {
        text: 'Emily is a great active listener and facilitator. She is proactive and detail oriented. She is great at communicating how your work directly contributes to the goals of the business.',
        author: 'Chris Lange, Content Design, IBM',
      },
      {
        text: 'Any team would be lucky to have Emily—she brings strategic thinking, collaborative energy, and a relentless focus on delivering value to users.',
        author: 'Erin Buonomo, Director of Product Design, Asset Lifecycle Management, IBM',
      },
    ],
  },
  'watson-ai': {
    id: 'watson-ai',
    title: 'UX for AI',
    category: 'AI/UX Research',
    year: '2023',
    role: 'Senior UX Designer, Author & AI Guild Lead',
    client: 'IBM',
    description: 'Co-authored UX for AI Principles and integrated Watson AI capabilities across enterprise product suite',
    challenge: 'As AI capabilities expanded across IBM products, teams needed clear principles and patterns for designing trustworthy, transparent AI experiences that users could understand and control.',
    solution: '<p>I was a founding member of the IBM AI Guild in 2021, where I helped lead our transition into designing intuitive, human-centered AI experiences. As part of that work, I co-authored IBM\'s UX for AI principles. These were guidelines that ensure our AI solutions enhance human abilities rather than limit them.</p><p style="margin-top: 2rem;">By creating a clear and accessible foundation for AI-UX craft, I enabled designers and cross-functional teams to develop a shared understanding and stronger empathy in a space that was rapidly evolving. Leading my team into this new design frontier meant defining expectations, responsibilities, and collaborative frameworks that empowered us to make thoughtful, confident AI design decisions.</p>',
    impact: [
      'Established UX for AI Principles adopted across IBM product portfolio',
      'Trained 50+ designers and product teams on AI UX best practices',
      `<div class="flex items-center gap-3"><img src="${uxpaLogo}" alt="UXPA International" class="h-18 w-auto flex-shrink-0" /><a href="https://uxpa.org/aiovg_videos/designing-the-ux-for-ai-not-your-typical-ux-design/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800 transition-colors">Presented at UXPA conferences (2021, 2024) on AI in UX design</a></div>`,
    ],
    responsibilities: [
      'Co-authored IBM UX for AI Principles and design guidelines',
      'Led UX for AI guild with designers across product divisions',
      'Designed explainable AI interfaces and transparency features',
      'Conducted AI ethics workshops and design critiques',
      'Created AI design pattern library and documentation',
    ],
    quotes: [
      {
        text: "Emily's AI design principles have become foundational to how we build trustworthy AI experiences",
        author: 'Design Director, IBM',
      },
      {
        text: 'Her leadership of the AI guild transformed our approach to designing with emerging technologies',
        author: 'VP of Design, IBM',
      },
    ],
  },
  'broadridge-advisor': {
    id: 'broadridge-advisor',
    title: 'Advisor Platform Redesign',
    category: 'UX/UI Design',
    year: '2018-2020',
    role: 'Senior UX Designer',
    client: 'Broadridge Financial',
    description: 'Redesigned financial advisor workflows to streamline client onboarding and portfolio management operations',
    challenge: 'Financial advisors were struggling with fragmented tools and complex workflows that slowed down client onboarding and portfolio management, leading to inefficiency and client frustration.',
    solution: 'Redesigned the advisor platform with unified workflows, intelligent automation, and streamlined interfaces. Focused on reducing cognitive load and enabling advisors to focus on client relationships rather than administrative tasks.',
    impact: [
      'Reduced client onboarding time from 45 minutes to 15 minutes',
      'Increased advisor productivity by 50%',
      'Improved client satisfaction scores by 40%',
    ],
    responsibilities: [
      'Led UX redesign of advisor workflows and client management tools',
      'Conducted contextual inquiry with financial advisors',
      'Created detailed wireframes, prototypes, and design specifications',
      'Collaborated with development teams on agile implementation',
      'Conducted usability testing and iterative design improvements',
    ],
    quotes: [
      {
        text: 'The workflow redesign cut our onboarding time by two-thirds. Advisors love the new system',
        author: 'VP of Technology, Broadridge',
      },
      {
        text: "Emily's user research uncovered pain points we didn't even know existed",
        author: 'Product Manager, Broadridge',
      },
    ],
  },
  'nuveen-digital': {
    id: 'nuveen-digital',
    title: 'Digital Experience Platform',
    category: 'UX/UI Design',
    year: '2015-2018',
    role: 'Interactive Designer',
    client: 'Nuveen Investments',
    description: 'Created interactive digital experiences and marketing materials for investment products and services',
    challenge: 'Nuveen needed to transform complex investment data and product information into engaging digital experiences that resonated with both financial advisors and institutional investors.',
    solution: 'Designed interactive presentations, data visualizations, and digital marketing materials that made investment information accessible and compelling. Created cohesive design systems that worked across web, mobile, and presentation formats.',
    impact: [
      'Launched 20+ interactive product presentations',
      'Increased digital engagement by 65%',
      'Supported $500M+ in new investment product launches',
    ],
    responsibilities: [
      'Designed interactive presentations and digital marketing materials',
      'Created data visualizations for investment performance',
      'Developed design systems for brand consistency',
      'Collaborated with product and marketing teams',
      'Designed responsive web and mobile experiences',
    ],
    quotes: [
      {
        text: 'Emily transformed complex investment data into beautiful, engaging digital experiences',
        author: 'Marketing Director, Nuveen',
      },
      {
        text: 'Her interactive presentations helped us win major institutional clients',
        author: 'Head of Product, Nuveen',
      },
    ],
  },
  'nuveen-campaign': {
    id: 'nuveen-campaign',
    title: 'Focus on Income Campaign',
    category: 'Brand Design',
    year: '2016-2017',
    role: 'Interactive Designer',
    client: 'Nuveen Investments',
    description: 'Led comprehensive campaign design with interactive presentations and investor education materials',
    challenge: 'Nuveen needed to launch a major campaign to educate investors about income-focused investment strategies during a low-interest-rate environment.',
    solution: 'Designed a comprehensive campaign including interactive presentations, educational materials, and digital experiences. Created compelling narratives around income investing that resonated with diverse investor audiences.',
    impact: [
      'Reached 50,000+ financial advisors nationwide',
      'Generated $1B+ in new income product investments',
      'Won internal innovation award for campaign design',
    ],
    responsibilities: [
      'Led campaign design and creative direction',
      'Created interactive investor education materials',
      'Designed presentation decks and marketing collateral',
      'Coordinated with marketing and product teams',
      'Ensured brand consistency across all campaign materials',
    ],
    quotes: [
      {
        text: 'The campaign design was instrumental in our most successful product launch ever',
        author: 'CMO, Nuveen',
      },
      {
        text: "Emily's creative vision brought our income investment strategy to life",
        author: 'Product Strategy Lead, Nuveen',
      },
    ],
  },
};

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [showImageModal, setShowImageModal] = useState(false);
  const [showCompetitorModal, setShowCompetitorModal] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [showUxForAiModal, setShowUxForAiModal] = useState(false);
  const videoRef = useState<HTMLIFrameElement | null>(null)[0];
  
  const project = projectId ? projectsData[projectId] : null;

  // Auto-play video when modal opens
  useEffect(() => {
    if (isVideoModalOpen && videoRef) {
      // Small delay to ensure iframe is loaded
      const timer = setTimeout(() => {
        try {
          // Try to trigger autoplay via postMessage
          videoRef.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        } catch (e) {
          console.log('Autoplay not supported');
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVideoModalOpen, videoRef]);

  // Scroll to top when component mounts or projectId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  // Track scroll position to show/hide top button
  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 400px
      setShowTopButton(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Project not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-black transition-colors"
          >
            Return to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="fixed top-8 left-6 z-50">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm hover:text-gray-600 transition-colors bg-white px-4 py-2 shadow-sm"
        >
          <ArrowLeft size={16} />
          Back
        </button>
      </div>

      {/* Top Button */}
      {showTopButton && (
        <div className="fixed top-8 right-6 z-50">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm hover:text-gray-600 transition-all bg-white px-4 py-2 shadow-sm hover:shadow-md"
          >
            <ArrowUp size={16} />
            Top
          </button>
        </div>
      )}

      {/* Project Header */}
      <div className="max-w-5xl mx-auto px-6 pt-24 md:pt-32 pb-[42px]">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8">{project.title}</h1>
          
          {/* Navigation */}
          <nav className="flex gap-6 mb-12 border-b-[0.5px] border-gray-200 pb-4">
            <a 
              href="#challenge" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('challenge')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-sm hover:text-gray-600 hover:scale-105 transition-all cursor-pointer active:text-gray-800"
            >
              The Challenge
            </a>
            <a 
              href="#process" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('process')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-sm hover:text-gray-600 hover:scale-105 transition-all cursor-pointer active:text-gray-800"
            >
              The Process
            </a>
            <a 
              href="#impact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-sm hover:text-gray-600 hover:scale-105 transition-all cursor-pointer active:text-gray-800"
            >
              Impact & Results
            </a>
          </nav>
          
          {/* Project Meta Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Client</p>
              <p className="text-sm">{project.client}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Year</p>
              <p className="text-sm">{project.year}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Role</p>
              <p className="text-sm">{project.role}</p>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-2">
            {/* Italy Image - Show only for IBM Environmental project */}
            {project.id === 'ibm-environmental' && (
              <div className="mb-8">
                <ImageWithFallback
                  src={italyImage}
                  alt="Italy Above Ground Biomass Comparison"
                  className="w-full h-auto"
                />
              </div>
            )}
            {/* Renewables Hero Image */}
            {project.id === 'maximo-asset' && (
              <>
                <div className="mb-4 relative group cursor-pointer" onClick={() => setIsVideoModalOpen(true)}>
                  <ImageWithFallback
                    src={renewablesHeroImage}
                    alt="Wind turbines renewable energy landscape"
                    className="w-full h-auto"
                  />
                  {/* Play Button Overlay */}
                  {!isVideoModalOpen && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/60 rounded-full flex items-center justify-center group-hover:bg-white/80 transition-all">
                        <Play className="w-7 h-7 text-gray-700 ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                  )}
                  {/* Video Overlay */}
                  {isVideoModalOpen && (
                    <div 
                      className="absolute inset-0 bg-black z-50"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsVideoModalOpen(false);
                      }}
                    >
                      <iframe 
                        className="w-full h-full" 
                        src="https://drive.google.com/file/d/10FtFP3hQtD4Ro-ALVDe87-7kEdt2Bkqq/preview"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        onClick={(e) => e.stopPropagation()}
                      >
                      </iframe>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-4 italic">
                  I organized and led the team that produced this video, featured in our Renewable Forecasting tool's award-winning submission for the <strong>2023 Sustainability Product of the Year.</strong>
                </p>
              </>
            )}
            
            {/* UX Principles Header Image - only for watson-ai project */}
            {project.id === 'watson-ai' && (
              <div className="mb-8">
                <ImageWithFallback
                  src={uxPrinciplesHeaderImage}
                  alt="UX for AI Principles"
                  className="w-[87.5%] h-auto"
                />
              </div>
            )}
            
            <p className="leading-relaxed text-gray-800 text-[15px]">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div id="challenge" className="bg-gray-50 py-4 md:py-6">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-6 text-[32px]">The Challenge</h3>
            <div 
              className="text-lg md:text-xl leading-relaxed text-gray-700 challenge-content"
              dangerouslySetInnerHTML={{ __html: project.challenge }}
            />
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div id="process" className="pt-16 md:pt-24 pb-5 md:pb-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-6 text-[32px]">The Process</h3>
            
            {/* Special rendering for Maximo Asset project with image between paragraphs */}
            {project.id === 'maximo-asset' ? (
              <>
                <div className="text-lg md:text-xl leading-relaxed text-gray-700 mb-12">
                  <p>We began by deeply understanding the operational pressures of maintenance planners, asset managers, and grid operators. Through interviews, workflow observations, and co-design sessions, we identified key pain points: scattered systems, safety risks, reliance on low-quality public data, and the need for precise, real-time insights.</p>
                </div>
                
                {/* Competitor Analysis Image */}
                <div className="mb-12">
                  <div className="overflow-hidden relative">
                    {/* Expand Icon */}
                    <button
                      onClick={() => setShowCompetitorModal(true)}
                      className="absolute top-2 left-2 z-10 bg-white/90 hover:bg-white p-2 rounded-lg shadow-md transition-all hover:shadow-lg"
                      aria-label="Expand image to full view"
                    >
                      <Expand size={20} className="text-gray-700" />
                    </button>
                    
                    <ImageWithFallback
                      src={competitorAnalysisImage}
                      alt="Target Competitors - Competitive Analysis"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-3 italic">
                    Working in Mural I led a cross-functional team exercise to better understand the competitive landscape before designing our solution.
                  </p>
                </div>
                
                <div className="text-lg md:text-xl leading-relaxed text-gray-700 mb-12">
                  <p>Working with research, I lead our team through a competitive analysis workshop where we identified target competitors to understand capability expectations as we started to construct our solution.</p>
                </div>
                
                {/* Competitor Analysis Modal */}
                <Dialog open={showCompetitorModal} onOpenChange={setShowCompetitorModal}>
                  <DialogContent className="max-w-[95vw] bg-white overflow-auto h-[98vh] p-0">
                    <DialogTitle className="sr-only">Competitor Analysis Workshop</DialogTitle>
                    <DialogDescription className="sr-only">
                      Full view of competitive analysis workshop in Mural
                    </DialogDescription>
                    <div className="overflow-auto w-full h-full">
                      <div style={{ width: '150vw', height: 'auto' }}>
                        <ImageWithFallback
                          src={competitorAnalysisModalImage}
                          alt="Competitor Analysis Workshop - Full view"
                          className="w-full h-auto"
                          style={{ 
                            transform: 'scale(1.5)',
                            transformOrigin: 'top left'
                          }}
                        />
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </>
            ) : project.id === 'watson-ai' ? (
              <>
                <div className="text-lg md:text-xl leading-relaxed text-gray-700 mb-12">
                  <p>I was a founding member of the IBM AI Guild in 2021, where I helped lead our transition into designing intuitive, human-centered AI experiences. As part of that work, I co-authored IBM's UX for AI principles. These were guidelines that ensure our AI solutions enhance human abilities rather than limit them.</p>
                </div>
                
                {/* UX for AI Image with Text */}
                <div className="mb-12 flex gap-8 items-start">
                  <div 
                    className="w-1/3 flex-shrink-0 cursor-pointer" 
                    onClick={() => window.open('https://drive.google.com/file/d/190BPgtBFrohul1q9hOWhsmiV37ZTk2M0/view', '_blank')}
                  >
                    <ImageWithFallback
                      src={uxForAiImage}
                      alt="UX for AI - July 2023"
                      className="w-full h-auto border border-gray-300 hover:opacity-90 transition-opacity"
                    />
                    <p className="text-center text-sm text-gray-600 mt-2 hover:text-gray-900 transition-colors">Click to view UX for AI principles</p>
                  </div>
                  
                  <div className="text-lg md:text-xl leading-relaxed text-gray-700 flex-1">
                    <p className="mb-6">By creating a clear and accessible foundation for AI-UX craft, I enabled designers and cross-functional teams to develop a shared understanding and stronger empathy in a space that was rapidly evolving.</p>
                    <p>Leading my team into this new design frontier meant defining expectations, responsibilities, and collaborative frameworks that empowered us to make thoughtful, confident AI design decisions.</p>
                  </div>
                </div>
              </>
            ) : (
              <div 
                className="text-lg md:text-xl leading-relaxed text-gray-700 mb-12"
                dangerouslySetInnerHTML={{ __html: project.solution }}
              />
            )}
          </div>
        </div>
        
        {/* Solution Images - Show for IBM Environmental project */}
        {project.id === 'ibm-environmental' && (
          <>
            <div className="mt-12 flex justify-center px-6">
              <div>
                <ImageWithFallback
                  src={environmentalImage}
                  alt="Product Development Lifecycle"
                  className="w-full h-auto max-w-4xl"
                />
              </div>
            </div>
            
            {/* Gray separator line */}
            <div className="mt-16 mb-16 flex justify-center px-6">
              <div className="w-full max-w-6xl border-b border-gray-300"></div>
            </div>
            
            {/* Process image centered */}
            <div className="mb-24 max-w-5xl mx-auto px-6">
              <div className="max-w-3xl">
                <div className="overflow-hidden relative">
                  {/* Expand Icon */}
                  <button
                    onClick={() => setShowImageModal(true)}
                    className="absolute top-2 left-2 z-10 bg-white/90 hover:bg-white p-2 rounded-lg shadow-md transition-all hover:shadow-lg"
                    aria-label="Expand image to full view"
                  >
                    <Expand size={20} className="text-gray-700" />
                  </button>
                  
                  <ImageWithFallback
                    src={processImage1}
                    alt="Mural workshops"
                    className="w-full h-auto border border-gray-200"
                    style={{ 
                      transform: 'scale(1.8)',
                      transformOrigin: 'top left'
                    }}
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mt-6">
                  Mural workshops to align on expectations, use cases and target industries
                </p>
              </div>
            </div>

            {/* Image Modal */}
            <Dialog open={showImageModal} onOpenChange={setShowImageModal}>
              <DialogContent className="max-w-[95vw] bg-white overflow-auto h-[98vh] p-0">
                <DialogTitle className="sr-only">Mural Workshop Image</DialogTitle>
                <DialogDescription className="sr-only">
                  Full view of mural workshops to align on expectations, use cases and target industries
                </DialogDescription>
                <div className="overflow-auto w-full h-full">
                  <div style={{ width: '200vw', height: 'auto' }}>
                    <ImageWithFallback
                      src={processImage1}
                      alt="Mural workshops - Full view"
                      className="w-full h-auto"
                      style={{ 
                        transform: 'scale(1.5)',
                        transformOrigin: 'top left'
                      }}
                    />
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Continued Process Text */}
            <div className="max-w-5xl mx-auto px-6 mb-24">
              <div className="max-w-3xl">
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                  The team focused on our target persona and researched responsibilities and pain points to establish what problems we were trying to solve for and establish user goals. In this case they were:
                </p>
                <ul className="space-y-3 ml-6 mb-12">
                  <li className="text-lg md:text-xl leading-relaxed text-gray-700">
                    • See the changes to carbon content metrics since the baseline date to determine progress of carbon sequestration projects
                  </li>
                  <li className="text-lg md:text-xl leading-relaxed text-gray-700">
                    • On map: Pinpoint where changes have occurred in a region over time
                  </li>
                </ul>
                
                {/* Persona Image */}
                <div className="mb-8">
                  <ImageWithFallback
                    src={personaImage}
                    alt="Target Persona - ESG Portfolio Manager Carlos"
                    className="w-full h-auto"
                  />
                </div>
                
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-12">
                  From there the team worked with our Data Scientists to understand the data that was coming into our AI foundation model and then determine what the end user would see and what the user experience would be.
                </p>
                
                {/* Side by Side Images */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* LiDAR Image */}
                  <div>
                    <div className="h-full flex items-center">
                      <ImageWithFallback
                        src={lidarImage}
                        alt="LiDAR Aerial scans"
                        className="w-full h-full object-cover"
                        style={{ transform: 'scale(1.05)' }}
                      />
                    </div>
                    <p className="text-center text-sm text-gray-600 mt-4">
                      LiDAR Aerial scans to determine percentage of biomass in certain areas.
                    </p>
                  </div>
                  
                  {/* Histogram Image */}
                  <div>
                    <div className="h-full flex items-center overflow-hidden border border-gray-200">
                      <ImageWithFallback
                        src={histogramImage}
                        alt="Histograms of Above Ground Biomass values"
                        className="w-full h-auto"
                        style={{ transform: 'scale(1.5)' }}
                      />
                    </div>
                    <p className="text-center text-sm text-gray-600 mt-4">
                      Histograms generated from aerial scans of Above Ground Biomass values for various locations
                    </p>
                  </div>
                </div>
                
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 mt-30 mb-1">
                  When adding AI to any design, it's critical that the user be kept in the loop and I encouraged the team to focus on explainability whenever we added data that was generated from our AI model.
                </p>
                
                {/* Carbon Data Image */}
                <div className="overflow-hidden">
                  <ImageWithFallback
                    src={carbonDataImage}
                    alt="Carbon content data table with location information"
                    className="w-full h-auto"
                  />
                  <p className="text-center text-sm text-gray-600 mt-4">
                    By building explainability into the UI, users see the reasoning behind an AI's decisions, building confidence and trust in how the product works.
                  </p>
                </div>
                
                {/* Explainability Image */}
                <div className="overflow-hidden mt-8">
                  <ImageWithFallback
                    src={explainabilityImage}
                    alt="IBM Environmental Intelligence Suite showing AGB overview for Brazil"
                    className="w-full h-auto"
                  />
                  <p className="text-center text-sm text-gray-600 mt-4 mb-0">
                    Using historical climate and weather data, combined with aerial LiDAR data, the AI model can generate current, historical and predictive insights based on trends.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Solution Images - Show for Maximo project */}
        {project.id === 'maximo-asset' && (
          <>
            {/* Gray separator line */}
            <div className="mt-16 mb-16 flex justify-center px-6">
              <div className="w-full max-w-6xl border-b border-gray-300"></div>
            </div>
            
            {/* Research Insights */}
            <div className="mb-24 max-w-5xl mx-auto px-6">
              <div className="max-w-3xl">
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8">
                  With these insights, the design and engineering teams shaped a platform that integrates:
                </p>
                <ul className="space-y-3 ml-6 mb-12">
                  <li className="text-lg md:text-xl leading-relaxed text-gray-700">
                    • The Weather Company's <strong>high-resolution, 15-minute forecast updates</strong>,
                  </li>
                  <li className="text-lg md:text-xl leading-relaxed text-gray-700">
                    • AI/ML models operating in near real-time using historical and operational data,
                  </li>
                  <li className="text-lg md:text-xl leading-relaxed text-gray-700">
                    • Flexible delivery through <strong>API, FTP, or custom UI</strong>, and
                  </li>
                  <li className="text-lg md:text-xl leading-relaxed text-gray-700">
                    • Customizable dashboards and geospatial visualizations surfacing KPIs through maps, charts, tables, and alerts.
                  </li>
                </ul>
                
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-1">
                  We iterated closely with pilot customers in Brazil, India, and the U.S., refining the experience based on real operational behavior—improving dashboard clarity, alert logic, scalability, and integration touchpoints.
                </p>

                {/* Weather Dashboard Image */}
                <div className="mt-12 mb-4">
                  <img 
                    src={weatherDashboardImage} 
                    alt="Weather Dashboard interface showing alerts and map" 
                    className="w-full"
                  />
                  <p className="text-sm text-gray-500 mt-4 italic">
                    <strong>Weather Dashboard:</strong> From the weather dashboard, users can see the active weather alerts that might impact solar and wind output at their farms. Users can see recent weather activity like wind speed to determine the current impact on their wind turbines.
                  </p>
                </div>

                {/* Energy Dashboard Image */}
                <div className="mt-12 mb-4">
                  <img 
                    src={energyDashboardImage} 
                    alt="Energy Dashboard interface showing energy output and forecasts" 
                    className="w-full"
                  />
                  <p className="text-sm text-gray-500 mt-4 italic">
                    <strong>Energy Dashboard:</strong> From the energy dashboard, business users track energy output at their farms over the last 24 hours and they last 30 days.
                  </p>
                </div>

                {/* Operations Dashboard Image */}
                <div className="mt-12 mb-4">
                  <img 
                    src={operationsDashboardImage} 
                    alt="Operations Dashboard showing turbine utilization and work queue management" 
                    className="w-full"
                  />
                  <p className="text-sm text-gray-500 mt-4 italic">
                    <strong>Operations Dashboard:</strong> From the operations dashboard, business users can see how well utilized their wind turbines are at a glance and see how much energy output each turbine is delivering. The Environmental Intelligence Suite identifies opportunities for preventative maintenance from it's weather data models. When low wind is forecasted, a work item is triggered.
                  </p>
                </div>

                {/* Work Queues Image */}
                <div className="mt-12 mb-4">
                  <img 
                    src={workQueuesImage} 
                    alt="Work Queues interface showing maintenance work items triggered by weather forecasts" 
                    className="w-full"
                  />
                  <p className="text-sm text-gray-500 mt-4 italic">
                    <strong>Work Queues:</strong> When a predetermined weather event is forecasted, a work item is triggered. With the knowledge that this weather event is forecasted, a crew can carry out maintenance work without impacting energy output and with less safety risks for crew.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Key Responsibilities & Impact Grid */}
      <div id="results" className="bg-gray-50 pt-5 md:pt-8 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            {/* Impact & Results */}
            <div id="impact" className="flex-1">
              <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-6 text-[32px]">Impact & Results</h3>
              <ul className="space-y-3">
                {project.impact.map((item, index) => (
                  <li key={index} className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
            
            {/* Sustainability Award Image */}
            {project.id === 'maximo-asset' && (
              <div className="flex-shrink-0 w-full md:w-56">
                <img 
                  src={sustainabilityAwardImage} 
                  alt="IBM Sustainability Award 2023 for Renewables Forecasting" 
                  className="w-full"
                />
                <p className="text-sm text-gray-500 mt-4 italic">
                  Our renewables forecasting solution won the Sustainability Product of the Year Award in 2023
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      {project.quotes.length > 0 && (
        <div className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-12">Testimonials</h3>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {project.quotes.map((quote, index) => (
                <div key={index} className="border-l-2 border-gray-300 pl-6">
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    "{quote.text}"
                  </p>
                  {quote.author && (
                    <p className="text-sm text-gray-500">
                      — {quote.author}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer Navigation */}
      <div className="border-t border-gray-200 py-12">
        <div className="max-w-5xl mx-auto px-6 flex justify-center">
          <button
            onClick={() => navigate('/')}
            className="text-sm hover:text-gray-600 transition-colors"
          >
            ← Back to all projects
          </button>
        </div>
      </div>
    </div>
  );
}
