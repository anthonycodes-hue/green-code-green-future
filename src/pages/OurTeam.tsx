import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const teamMembers = [
    {
        name: "Anthony Crausus",
        role: "Full Stack Developer",
        image: "/team/t2.jpg"
    },
    {
        name: "Salman Sultan",
        role: "Graphics Designer & SEO Expert",
        image: "/team/t3.jpg"
    },
    {
        name: "Hamdan Cawasa",
        role: "Finance Advisor",
        image: "/team/t4.jpg"
    },
    {
        name: "Marjoe Bechayda",
        role: "Planning Manager",
        image: "/team/t1.jpg"
    }
];

const OurTeam = () => {
    return (
        <div className="min-h-screen bg-[#F8F9FA] flex justify-center py-24">
            <div className="container mx-auto px-6 ">
                <div className="mb-6">
                    <span className="text-sm font-medium text-primary tracking-wide">Our Team</span>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-medium text-slate-900 mb-2 tracking-tight">Meet our Team</h1>
                        <h2 className="text-5xl md:text-6xl font-medium text-primary/80 mb-8 tracking-tight">Passionate. Proactive. Expert.</h2>
                        <p className="text-lg text-slate-600 max-w-xl font-medium leading-relaxed">
                            We lead with care, our core value, and a shared passion for connecting the world.
                        </p>
                    </div>

                    {/* <div className="flex gap-4">
                        <button className="p-4 rounded-full border border-slate-300 hover:bg-slate-200 transition-colors flex items-center justify-center">
                            <ArrowLeft className="w-6 h-6 text-slate-600" strokeWidth={1.5} />
                        </button>
                        <button className="p-4 rounded-full border border-slate-300 hover:bg-slate-200 transition-colors flex items-center justify-center">
                            <ArrowRight className="w-6 h-6 text-slate-600" strokeWidth={1.5} />
                        </button>
                    </div> */}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col group cursor-pointer">
                            <div className="overflow-hidden mb-6 aspect-auto bg-slate-200 relative">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-1">{member.name}</h3>
                            <p className="text-slate-500 font-medium">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurTeam;