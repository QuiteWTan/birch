"use client"
import { useEffect, useState } from "react"
import { motion,AnimatePresence } from "framer-motion"
import { BiChevronDown } from "react-icons/bi";

type FaqProps = {
    Ques: string;
    Ans:string;
    i:number;
    drop:number;
    set:  React.Dispatch<React.SetStateAction<number>>;
}
const FAQ = ({Ques,Ans,i, drop, set} : FaqProps) => {

    const dropDown = (index:number) => {
        set(index === drop ? -1 : index)
    }
    return(
            <div className="w-full">
                <div className="w-full py-2 border-b border-white">
                    <h1 className="text-lg md:text-xl font-ysa flex flex-row items-center justify-between w-full ">{Ques} 
                    <BiChevronDown
                        name='chevron-down'
                        onClick={() => dropDown(i)}
                        rotate={i === drop ? '180' : ''}
                        transition={{duration:0.3}}
                    >

                    </BiChevronDown>
                    </h1>
                </div>
                <AnimatePresence>
                    {i === drop ?
                        <motion.div 
                            initial={{height:0}} 
                            animate={{height:"auto"}} 
                            exit={{height:0}}
                            transition={{duration:0.3}}
                            style={{overflow:"hidden"}}
                            className="pt-4"
                        > 
                        <h1 className="text-xs md:text-sm">{Ans}</h1>
                        </motion.div> 
                        : 
                        null     
                    }
                </AnimatePresence>
            </div>
    )
}

export default FAQ