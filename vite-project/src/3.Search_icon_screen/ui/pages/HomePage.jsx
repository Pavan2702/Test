import React, { useEffect, useState } from 'react'
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import image1 from '../../../../public/img1.jpg'
import image2 from '../../../../public/img2.jpg'
import image3 from '../../../../public/img3.jpg'
import image4 from '../../../../public/img4.jpg'

export default function HomePage() {
    const [search, setSearch] = useState("")
    const [data, setData] = useState([{ img: image1, val: "Font Awesome" }, { img: image2, val: "Foundation" }, { img: image3, val: "Glyphicons" }, { img: image3, val: "IcoMoon" }, { img: image4, val: "Material" }])
    const [searchData, SetSearchData] = useState([])
    useEffect(() => {
        const searchData = data?.filter((e) =>
            e.val.toLowerCase().includes(search.toLowerCase()))
        SetSearchData(searchData)
    }, [search, data])

    return (
        <>

            <div className="flex">
                <div className='bg-slate-500 w-1/5 h-screen px-3'>
                    <div className="flex justify-center text-4xl text-center text-white py-5">
                        Pavan Patil
                    </div>
                    <div className="flex flex-col">
                        <div className='py-3'>
                            <label htmlFor="searchIcons">Search</label>
                        </div>
                        <div>
                            <input type="text"
                                className='w-full rounded-md'
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className='py-3'>
                            <label htmlFor="">Library</label>
                        </div>
                        <div>
                            <button className='bg-gray-600 hover:text-white text-slate-400 me-4 px-2 py-1 text-xs rounded-md border-1 border-black mb-1'>All</button>
                            <button className='bg-gray-600 hover:text-white text-slate-400 me-4 px-2 py-1 text-xs rounded-md border-1 border-black mb-1'>Font Awesome</button>
                            <button className='bg-gray-600 hover:text-white text-slate-400 me-4 px-2 py-1 text-xs rounded-md border-1 border-black mb-1'>Foundation</button>
                            <button className='bg-gray-600 hover:text-white text-slate-400 me-4 px-2 py-1 text-xs rounded-md border-1 border-black mb-1'>Glyphicons</button>
                            <button className='bg-gray-600 hover:text-white text-slate-400 me-4 px-2 py-1 text-xs rounded-md border-1 border-black mb-1'>IcoMoon</button>
                            <button className='bg-gray-600 hover:text-white text-slate-400 me-4 px-2 py-1 text-xs rounded-md border-1 border-black mb-1'>Ionicons</button>
                            <button className='bg-gray-600 hover:text-white text-slate-400 me-4 px-2 py-1 text-xs rounded-md border-1 border-black mb-1'>Material</button>
                            <button className='bg-gray-600 hover:text-white text-slate-400 me-4 px-2 py-1 text-xs rounded-md border-1 border-black mb-1'>Octicons</button>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className='py-3'>
                            <label htmlFor="">Copy</label>
                        </div>
                        <div>
                            <button className='bg-gray-600 hover:text-white text-slate-400 me-4 px-2 py-1 text-xs rounded-md border-1 border-black mb-1'>Markup</button>
                            <button className='bg-gray-600 hover:text-white text-slate-400 me-4 px-2 py-1 text-xs rounded-md border-1 border-black mb-1'>Class</button>
                            <button className='bg-gray-600 hover:text-white text-slate-400 me-4 px-2 py-1 text-xs rounded-md border-1 border-black mb-1'>Name</button>
                            <button className='bg-gray-600 hover:text-white text-slate-400 me-4 px-2 py-1 text-xs rounded-md border-1 border-black mb-1'>unicode</button>
                            <button className='bg-gray-600 hover:text-white text-slate-400 me-4 px-2 py-1 text-xs rounded-md border-1 border-black mb-1'>Hex</button>
                            <button className='bg-gray-600 hover:text-white text-slate-400 me-4 px-2 py-1 text-xs rounded-md border-1 border-black mb-1'>HTML Entity</button>
                        </div>
                    </div>

                </div>
                <div className='bg-slate-200 w-full'>
                    <div>
                        {
                            searchData.length !== 0 ?
                                (<div className="flex text-black flex-col">
                                    {
                                        searchData?.map((e, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td>
                                                        {e.img}
                                                    </td>
                                                    <td>
                                                        {e.val}
                                                    </td>
                                                </tr>
                                            )

                                        })
                                    }
                                </div>) : (
                                    <div className="flex text-black flex-col">
                                        {
                                            data?.map((e, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td>
                                                            {e.img}
                                                        </td>
                                                        <td>
                                                            {e.val}
                                                        </td>
                                                    </tr>
                                                )

                                            })
                                        }
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
