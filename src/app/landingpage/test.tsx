"use client"

import { useEffect, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const items = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolorum consequuntur vitae beatae error tenetur nihil! Incidunt velit ex eum!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nostrum inventore a doloremque, possimus similique tempora. Ad perspiciatis aperiam iusto.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium perferendis adipisci quo voluptates assumenda animi aspernatur delectus, quia aut recusandae?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda velit consequuntur necessitatibus odit molestiae perspiciatis beatae magni aspernatur voluptatibus!"
];

export default function Test() {
    const [loading, setLoading] = useState(false);
    const [clickedItems, setClickedItems] = useState<number[]>([]);

    useEffect(() => {
        setLoading(true);
    }, []);

    const toggleItem = (index: number) => {
        setClickedItems((prev) =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-slate-900 via-gray-900 to-black text-white p-8 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6 text-center">✨ Smooth Content Reveal</h1>

            <div className="w-full max-w-2xl space-y-6">
                {items.map((text, i) => (
                    <div
                        key={i}
                        style={{ transitionDelay: `${i * 300}ms` }}
                        className={`
              transition-all duration-700 ease-out transform
              ${loading ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}
              bg-gray-800 border border-gray-700 p-5 rounded-xl shadow-lg
            `}
                    >
                        <div className="flex justify-between items-start">
                            <p className="text-lg leading-relaxed max-w-[90%]">{text}</p>
                            <button onClick={() => toggleItem(i)} className="ml-2">
                                {clickedItems.includes(i) ? <ChevronDown /> : <ChevronUp />}
                            </button>
                        </div>
                        {clickedItems.includes(i) && (
                            <div
                                className="mt-2 ml-2 text-sm text-gray-300 space-y-1
               transition-all duration-300 ease-out
               opacity-100 transform translate-y-0 scale-100"
                            >
                                <p>home</p>
                                <p>hello</p>
                            </div>
                        )}

                    </div>
                ))}
            </div>
        </div>
    );
}
