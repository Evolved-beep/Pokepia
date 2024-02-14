"use client"
import { Bar, BarChart, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const Barchar = ({stats}: any) => {
    const pokemonStats = []
    for(let i = 0; i < stats?.length; i++){
        pokemonStats.push({
            stat: stats[i].base_stat,
            type: stats[i].stat.name,
            max:100
        })
    }   
    return(
        <>
            <h1 className="px-6 py-4 text-[#313131]">Basics stats</h1>
            <ResponsiveContainer 
                width="100%"
                height={300}>  
                <BarChart 
                data={pokemonStats}>
                    <XAxis dataKey="type" hide={true}/>
                    <YAxis dataKey="stat" tickCount={3} tickMargin={12} orientation="right"/>
                    <Tooltip />
                    <Bar dataKey='stat' barSize={10} fill="#30a7d7" activeBar={<Rectangle fill="#F3F3F3" />} />
                </BarChart>
            </ResponsiveContainer>
        </>
    )

}

export default Barchar