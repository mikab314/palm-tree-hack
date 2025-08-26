import React, { useState } from 'react';
import { 
  Users, BookOpen, Video, Download, BarChart3, MessageCircle, 
  Clock, CheckCircle, Star, Calendar, Bell, Search,
  Filter, Upload, Settings, Award, TrendingUp
} from 'lucide-react';

type Module = {
  id: string;
  title: string;
  category: 'Compliance' | 'Technical' | 'Professional Development';
  duration: string;
  progress: number;
  participants: number;
  rating: number;
  lastUpdated: string;
  description: string;
  hasVideo: boolean;
  documents: number;
};

const TrainingCenter = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'modules' | 'community' | 'training-library' | 'analytics'>('dashboard');
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [toolboxFilter, setToolboxFilter] = useState<string>('all');
  const [toolboxSearch, setToolboxSearch] = useState<string>('');
  const [progressState] = useState<Record<string, number>>({
    'compliance-101': 75,
    'leadership-skills': 45,
    'tech-fundamentals': 90,
    'broker-relations': 30
  });
  const [modulesSubsection, setModulesSubsection] = useState<'all' | 'video'>('all');
  const [activeVideoModuleId, setActiveVideoModuleId] = useState<string | null>(null);

  const modules: Module[] = [
    {
      id: 'compliance-101',
      title: 'Compliance Fundamentals',
      category: 'Compliance',
      duration: '2.5 hours',
      progress: progressState['compliance-101'],
      participants: 24,
      rating: 4.8,
      lastUpdated: '2 days ago',
      description: 'Essential compliance requirements and best practices',
      hasVideo: true,
      documents: 3
    },
    {
      id: 'leadership-skills',
      title: 'Modern Leadership Techniques',
      category: 'Professional Development',
      duration: '4 hours',
      progress: progressState['leadership-skills'],
      participants: 18,
      rating: 4.9,
      lastUpdated: '1 week ago',
      description: 'Advanced leadership strategies for managing diverse teams',
      hasVideo: true,
      documents: 5
    },
    {
      id: 'tech-fundamentals',
      title: 'Technical Skills Foundation',
      category: 'Technical',
      duration: '3 hours',
      progress: progressState['tech-fundamentals'],
      participants: 32,
      rating: 4.7,
      lastUpdated: '3 days ago',
      description: 'Core technical competencies and tools',
      hasVideo: false,
      documents: 7
    },
    {
      id: 'broker-relations',
      title: 'Broker Partnership Excellence',
      category: 'Professional Development',
      duration: '1.5 hours',
      progress: progressState['broker-relations'],
      participants: 15,
      rating: 4.6,
      lastUpdated: '5 days ago',
      description: 'Building and maintaining strong broker relationships',
      hasVideo: true,
      documents: 4
    }
  ];

  const communityActivity = [
    { user: 'Sarah M.', action: 'completed', module: 'Compliance Fundamentals', time: '2 hours ago', role: 'Manager' },
    { user: 'Mike R.', action: 'started discussion in', module: 'Leadership Techniques', time: '4 hours ago', role: 'Employee' },
    { user: 'Lisa K.', action: 'uploaded new document to', module: 'Technical Skills', time: '1 day ago', role: 'Admin' },
    { user: 'Tom B.', action: 'joined live session for', module: 'Broker Relations', time: '2 days ago', role: 'Partner' }
  ];

  const upcomingEvents = [
    { title: 'Leadership Q&A Session', date: 'Today, 3:00 PM', attendees: 12 },
    { title: 'Compliance Updates Workshop', date: 'Tomorrow, 10:00 AM', attendees: 8 },
    { title: 'Tech Demo: New Tools', date: 'Friday, 2:00 PM', attendees: 15 }
  ];

  const toolboxTalks = [
    {
      id: 'safety-001',
      title: 'Workplace Ergonomics & Injury Prevention',
      category: 'Safety',
      dateAdded: '2024-08-20',
      downloads: 45,
      size: '2.3 MB',
      type: 'PDF',
      tags: ['ergonomics', 'injury prevention', 'workplace safety'],
      description: 'Essential guidelines for maintaining proper posture and preventing repetitive strain injuries.',
      lastUpdated: '1 week ago'
    },
    {
      id: 'compliance-002',
      title: 'OSHA Documentation Requirements',
      category: 'Compliance',
      dateAdded: '2024-08-15',
      downloads: 32,
      size: '1.8 MB',
      type: 'PDF',
      tags: ['OSHA', 'documentation', 'compliance'],
      description: 'Complete guide to OSHA record-keeping and documentation standards.',
      lastUpdated: '2 weeks ago'
    },
    {
      id: 'tech-003',
      title: 'Equipment Maintenance Checklist',
      category: 'Technical',
      dateAdded: '2024-08-18',
      downloads: 28,
      size: '950 KB',
      type: 'PDF',
      tags: ['maintenance', 'equipment', 'checklist'],
      description: 'Daily, weekly, and monthly maintenance procedures for all equipment.',
      lastUpdated: '1 week ago'
    },
    {
      id: 'safety-004',
      title: 'Emergency Response Procedures',
      category: 'Safety',
      dateAdded: '2024-08-12',
      downloads: 67,
      size: '3.1 MB',
      type: 'PDF',
      tags: ['emergency', 'response', 'procedures'],
      description: 'Step-by-step emergency response protocols for various workplace scenarios.',
      lastUpdated: '2 weeks ago'
    },
    {
      id: 'hr-005',
      title: 'New Employee Orientation Guide',
      category: 'HR',
      dateAdded: '2024-08-10',
      downloads: 23,
      size: '2.7 MB',
      type: 'PDF',
      tags: ['orientation', 'onboarding', 'new employee'],
      description: 'Comprehensive orientation materials for new team members.',
      lastUpdated: '2 weeks ago'
    },
    {
      id: 'quality-006',
      title: 'Quality Control Standards',
      category: 'Quality',
      dateAdded: '2024-08-22',
      downloads: 19,
      size: '1.5 MB',
      type: 'PDF',
      tags: ['quality', 'standards', 'control'],
      description: 'Quality assurance protocols and measurement standards.',
      lastUpdated: '3 days ago'
    },
    {
      id: 'communication-007',
      title: 'Client Communication Best Practices',
      category: 'Professional Development',
      dateAdded: '2024-08-14',
      downloads: 41,
      size: '1.2 MB',
      type: 'PDF',
      tags: ['communication', 'client relations', 'best practices'],
      description: 'Guidelines for effective client communication and relationship management.',
      lastUpdated: '1 week ago'
    },
    {
      id: 'finance-008',
      title: 'Expense Reporting Guidelines',
      category: 'Finance',
      dateAdded: '2024-08-16',
      downloads: 35,
      size: '800 KB',
      type: 'PDF',
      tags: ['expenses', 'reporting', 'finance'],
      description: 'Complete guide to expense reporting procedures and requirements.',
      lastUpdated: '1 week ago'
    }
  ];

  const DashboardView = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-2">Welcome back! 👋</h2>
        <p className="text-blue-100">Continue your learning journey and connect with your community</p>
        <div className="mt-4 flex space-x-4">
          <div className="bg-white/20 p-3 rounded-lg">
            <div className="text-lg font-semibold">4</div>
            <div className="text-sm text-blue-100">Active Modules</div>
          </div>
          <div className="bg-white/20 p-3 rounded-lg">
            <div className="text-lg font-semibold">68%</div>
            <div className="text-sm text-blue-100">Avg Progress</div>
          </div>
          <div className="bg-white/20 p-3 rounded-lg">
            <div className="text-lg font-semibold">12</div>
            <div className="text-sm text-blue-100">Community Members</div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <BookOpen className="mr-2 text-blue-600" size={20} />
              Continue Learning
            </h3>
            <div className="grid gap-4">
              {modules.slice(0, 2).map(module => (
                <div key={module.id} className="flex items-center p-4 border rounded-lg hover:shadow-md transition-all cursor-pointer"
                     onClick={() => setSelectedModule(module)}>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{module.title}</h4>
                      <span className="text-sm text-gray-500">{module.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${module.progress}%` }}></div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock size={14} className="mr-1" />
                      {module.duration}
                      {module.hasVideo && <Video size={14} className="ml-3 mr-1" />}
                      <Download size={14} className="ml-2 mr-1" />
                      {module.documents} docs
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <MessageCircle className="mr-2 text-green-600" size={20} />
              Community Activity
            </h3>
            <div className="space-y-3">
              {communityActivity.map((activity, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">
                    {activity.user.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span> {activity.action} <span className="font-medium">{activity.module}</span>
                    </p>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <span className="px-2 py-1 rounded-full mr-2 bg-gray-100 text-gray-700">{activity.role}</span>
                      {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Calendar className="mr-2 text-orange-600" size={20} />
              Upcoming Events
            </h3>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-3 border-l-4 border-orange-400 bg-orange-50">
                  <h4 className="font-medium text-sm">{event.title}</h4>
                  <p className="text-xs text-gray-600">{event.date}</p>
                  <p className="text-xs text-orange-600">{event.attendees} attending</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 p-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-orange-400 hover:text-orange-600 transition-colors">
              + Schedule New Session
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <Upload className="mx-auto mb-2 text-blue-600" size={20} />
                <div className="text-xs font-medium text-blue-700">Upload Content</div>
              </button>
              <button className="p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <Video className="mx-auto mb-2 text-green-600" size={20} />
                <div className="text-xs font-medium text-green-700">Start Live Session</div>
              </button>
              <button className="p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <MessageCircle className="mx-auto mb-2 text-purple-600" size={20} />
                <div className="text-xs font-medium text-purple-700">New Discussion</div>
              </button>
              <button className="p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                <BarChart3 className="mx-auto mb-2 text-orange-600" size={20} />
                <div className="text-xs font-medium text-orange-700">View Analytics</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ModulesView = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input type="text" placeholder="Search modules..." className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter className="mr-2" size={16} />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Upload className="mr-2" size={16} />
            Add Module
          </button>
        </div>
        <div className="mt-4 flex gap-2">
          <button onClick={() => { setModulesSubsection('all'); setActiveVideoModuleId(null); }} className={`px-3 py-2 rounded-lg text-sm font-medium ${modulesSubsection === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            All Modules
          </button>
          <button onClick={() => setModulesSubsection('video')} className={`px-3 py-2 rounded-lg text-sm font-medium ${modulesSubsection === 'video' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            Video Trainings
          </button>
        </div>
      </div>

      {modulesSubsection === 'all' && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map(module => (
            <div key={module.id} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-all cursor-pointer" onClick={() => setSelectedModule(module)}>
              <div className="flex items-start justify-between mb-4">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${module.category === 'Compliance' ? 'bg-red-100 text-red-700' : module.category === 'Technical' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                  {module.category}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="mr-1 text-yellow-400" size={14} />
                  {module.rating}
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">{module.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{module.description}</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Progress</span>
                  <span>{module.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${module.progress}%` }}></div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {module.duration}
                  </div>
                  <div className="flex items-center">
                    <Users size={14} className="mr-1" />
                    {module.participants}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  {module.hasVideo && (
                    <div className="flex items-center">
                      <Video size={14} className="mr-1 text-blue-600" />
                      Video
                    </div>
                  )}
                  <div className="flex items-center">
                    <Download size={14} className="mr-1 text-green-600" />
                    {module.documents} docs
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {modulesSubsection === 'video' && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.filter(m => m.hasVideo).map(module => (
              <div key={module.id} className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-lg">{module.title}</h3>
                  <button onClick={() => setActiveVideoModuleId(activeVideoModuleId === module.id ? null : module.id)} className="px-3 py-1 rounded-lg text-sm bg-blue-50 text-blue-700 hover:bg-blue-100">
                    {activeVideoModuleId === module.id ? 'Hide' : 'Watch'}
                  </button>
                </div>
                <p className="text-gray-600 text-sm mb-4">{module.description}</p>
                {activeVideoModuleId === module.id && (
                  <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-white">Video Player</div>
                  </div>
                )}
                <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {module.duration}
                  </div>
                  <div className="flex items-center">
                    <Download size={14} className="mr-1 text-green-600" />
                    {module.documents} docs
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const CommunityView = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-2">Community Hub</h2>
        <p className="text-green-100">Connect, share knowledge, and learn together</p>
      </div>
      <div className="grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Recent Discussions</h3>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-blue-400 bg-blue-50">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Best practices for compliance documentation?</h4>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Looking for efficient ways to organize compliance materials...</p>
                <div className="flex items-center text-sm">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full mr-2">Manager</span>
                  <span className="text-gray-500">5 replies</span>
                </div>
              </div>
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">New leadership workshop feedback</h4>
                  <span className="text-sm text-gray-500">4 hours ago</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Great session! Here are my key takeaways...</p>
                <div className="flex items-center text-sm">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full mr-2">Partner</span>
                  <span className="text-gray-500">8 replies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Online Now</h3>
            <div className="space-y-3">
              {['Sarah M.', 'Mike R.', 'Lisa K.', 'Tom B.'].map((user, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">
                    {user.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{user}</div>
                    <div className="flex items-center text-xs text-green-600">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                      Online
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TrainingLibraryView = () => {
    const categories = ['all', ...new Set(toolboxTalks.map(talk => talk.category))];

    const filteredTalks = toolboxTalks.filter(talk => {
      const matchesCategory = toolboxFilter === 'all' || talk.category === toolboxFilter;
      const matchesSearch = talk.title.toLowerCase().includes(toolboxSearch.toLowerCase()) || talk.tags.some((tag: string) => tag.toLowerCase().includes(toolboxSearch.toLowerCase()));
      return matchesCategory && matchesSearch;
    });

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Training Library</h2>
          <p className="text-teal-100">Access all your tangible trainings, safety talks, and reference documents</p>
          <div className="mt-4 flex space-x-4">
            <div className="bg-white/20 p-3 rounded-lg">
              <div className="text-lg font-semibold">{toolboxTalks.length}</div>
              <div className="text-sm text-teal-100">Total Documents</div>
            </div>
            <div className="bg-white/20 p-3 rounded-lg">
              <div className="text-lg font-semibold">{categories.length - 1}</div>
              <div className="text-sm text-teal-100">Categories</div>
            </div>
            <div className="bg-white/20 p-3 rounded-lg">
              <div className="text-lg font-semibold">{toolboxTalks.reduce((sum, talk) => sum + talk.downloads, 0)}</div>
              <div className="text-sm text-teal-100">Total Downloads</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input type="text" placeholder="Search training library..." value={toolboxSearch} onChange={(e) => setToolboxSearch(e.target.value)} className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(category => (
                <button key={category} onClick={() => setToolboxFilter(category)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${toolboxFilter === category ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
            <button className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
              <Upload className="mr-2" size={16} />
              Add Document
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <TrendingUp className="mr-2 text-teal-600" size={20} />
            Most Popular This Month
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {toolboxTalks.sort((a, b) => b.downloads - a.downloads).slice(0, 3).map(talk => (
              <div key={talk.id} className="flex items-center p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border border-teal-100">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                  <Download className="text-teal-600" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm text-gray-900 line-clamp-2">{talk.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">{talk.downloads} downloads</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTalks.map(talk => (
            <div key={talk.id} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${talk.category === 'Safety' ? 'bg-red-100 text-red-700' : talk.category === 'Compliance' ? 'bg-orange-100 text-orange-700' : talk.category === 'Technical' ? 'bg-blue-100 text-blue-700' : talk.category === 'HR' ? 'bg-purple-100 text-purple-700' : talk.category === 'Quality' ? 'bg-green-100 text-green-700' : talk.category === 'Finance' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'}`}>
                  {talk.category}
                </div>
                <div className="text-xs text-gray-500">{talk.type}</div>
              </div>
              <h3 className="font-semibold text-lg mb-2 line-clamp-2">{talk.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{talk.description}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {talk.tags.slice(0, 3).map((tag: string) => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Download size={14} className="mr-1" />
                  {talk.downloads} downloads
                </div>
                <div className="text-right">
                  <div>{talk.size}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center px-4 py-2 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition-colors">
                  <Download size={16} className="mr-1" />
                  Download
                </button>
                <button className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  <MessageCircle size={16} />
                </button>
              </div>
              <div className="mt-4 pt-4 border-t text-xs text-gray-500">Updated {talk.lastUpdated}</div>
            </div>
          ))}
        </div>

        {filteredTalks.length === 0 && (
          <div className="bg-white p-12 rounded-xl shadow-sm border text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-gray-400" size={24} />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No documents found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or browse all categories.</p>
            <button onClick={() => { setToolboxSearch(''); setToolboxFilter('all'); }} className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    );
  };

  const AnalyticsView = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-2">Learning Analytics</h2>
        <p className="text-purple-100">Track progress and measure engagement</p>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Total Learners</h3>
            <Users className="text-blue-600" size={20} />
          </div>
          <div className="text-2xl font-bold">89</div>
          <div className="text-sm text-green-600">+12% this month</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Completion Rate</h3>
            <CheckCircle className="text-green-600" size={20} />
          </div>
          <div className="text-2xl font-bold">78%</div>
          <div className="text-sm text-green-600">+5% this month</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Avg. Time Spent</h3>
            <Clock className="text-orange-600" size={20} />
          </div>
          <div className="text-2xl font-bold">4.2h</div>
          <div className="text-sm text-green-600">+0.3h this month</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Active Discussions</h3>
            <MessageCircle className="text-purple-600" size={20} />
          </div>
          <div className="text-2xl font-bold">24</div>
          <div className="text-sm text-green-600">+8 this week</div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Module Performance</h3>
        <div className="space-y-4">
          {modules.map(module => (
            <div key={module.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium">{module.title}</h4>
                <p className="text-sm text-gray-600">{module.participants} participants</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold">{module.progress}%</div>
                <div className="text-sm text-gray-600">avg completion</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ModuleDetail = ({ module, onClose }: { module: Module; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">{module.title}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
          </div>
          <p className="text-gray-600 mt-2">{module.description}</p>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center"><Clock size={16} className="mr-1" />{module.duration}</div>
              <div className="flex items-center"><Users size={16} className="mr-1" />{module.participants} enrolled</div>
              <div className="flex items-center"><Star size={16} className="mr-1 text-yellow-400" />{module.rating}</div>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${module.category === 'Compliance' ? 'bg-red-100 text-red-700' : module.category === 'Technical' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>{module.category}</span>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Your Progress</span>
              <span className="text-sm text-gray-600">{module.progress}% complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-blue-600 h-3 rounded-full transition-all" style={{ width: `${module.progress}%` }}></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {module.hasVideo && (
              <button className="flex items-center justify-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <Video className="mr-2 text-blue-600" size={20} />
                <span className="font-medium text-blue-700">Watch Video</span>
              </button>
            )}
            <button className="flex items-center justify-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <Download className="mr-2 text-green-600" size={20} />
              <span className="font-medium text-green-700">Download Materials ({module.documents})</span>
            </button>
          </div>
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Discussion</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold mr-2">SM</div>
                  <span className="text-sm font-medium">Sarah M.</span>
                  <span className="text-xs text-gray-500 ml-2">2 hours ago</span>
                </div>
                <p className="text-sm text-gray-700">Great module! The examples really helped clarify the concepts.</p>
              </div>
            </div>
            <button className="w-full mt-3 p-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-400 hover:text-blue-600 transition-colors">+ Add Comment</button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-white" size={20} />
                </div>
                <span className="ml-3 text-xl font-bold text-gray-900">Training Hub</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600"><Bell size={20} /></button>
              <button className="p-2 text-gray-400 hover:text-gray-600"><Settings size={20} /></button>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">JD</div>
                <span className="ml-2 text-sm font-medium text-gray-700">John Doe</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <nav className="w-64 bg-white shadow-sm border-r min-h-screen">
          <div className="p-4 space-y-2">
            <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center px-3 py-2 rounded-lg text-left ${activeTab === 'dashboard' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}>
              <BarChart3 className="mr-3" size={20} />
              Dashboard
            </button>
            <button onClick={() => setActiveTab('modules')} className={`w-full flex items-center px-3 py-2 rounded-lg text-left ${activeTab === 'modules' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}>
              <BookOpen className="mr-3" size={20} />
              Learning Modules
            </button>
            <button onClick={() => setActiveTab('community')} className={`w-full flex items-center px-3 py-2 rounded-lg text-left ${activeTab === 'community' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}>
              <Users className="mr-3" size={20} />
              Community
            </button>
            <button onClick={() => setActiveTab('training-library')} className={`w-full flex items-center px-3 py-2 rounded-lg text-left ${activeTab === 'training-library' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}>
              <Award className="mr-3" size={20} />
              Training Library
            </button>
            <button onClick={() => setActiveTab('analytics')} className={`w-full flex items-center px-3 py-2 rounded-lg text-left ${activeTab === 'analytics' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}>
              <TrendingUp className="mr-3" size={20} />
              Analytics
            </button>
          </div>
        </nav>

        <main className="flex-1 p-6">
          {activeTab === 'dashboard' && <DashboardView />}
          {activeTab === 'modules' && <ModulesView />}
          {activeTab === 'community' && <CommunityView />}
          {activeTab === 'training-library' && <TrainingLibraryView />}
          {activeTab === 'analytics' && <AnalyticsView />}
        </main>
      </div>

      {selectedModule && activeTab === 'modules' && modulesSubsection === 'all' && (
        <ModuleDetail module={selectedModule} onClose={() => setSelectedModule(null)} />
      )}
    </div>
  );
};

export default TrainingCenter;