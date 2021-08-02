import React, { useState } from 'react'


const RawMaterialConsumption = () => {

    const [size, setSize] = useState('')
    
    return (
        <div className="container-fluid h-100vh position-relative">
            
            <div className="d-flex h-100">
                {/* table 1 */}

                <div className=" border-right">
                    <table className="table-1">
                        <thead>
                            <tr>
                                <th className="text-center ">день</th>
                                <th className="text-center">дата</th>
                                <th className="text-center">Наименование товара</th>
                                <th className="px-2 text-left">Предлагаемый</th>
                                <th className="rotate-270 text-left">Факт расход</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center">
                                    <input type="text" className={"form-control-sm " + (size.length > 2 ? "" : "w-100")}
                                    size={size.length - 1} /></td>
                                <td className="text-center">
                                    <input type="text" className={"form-control-sm " + (size.length > 2 ? "" : "w-100")}
                                    size={size.length - 1}  />
                                </td>
                                <td className="text-center">
                                    <input type="text" className={"form-control-sm " + (size.length > 2 ? "" : "w-100")}
                                    size={size.length - 1} />
                                </td>
                                <td className="text-center">
                                    <input type="text" className={"form-control-sm " + (size.length > 2 ? "" : "w-100")}
                                    size={size.length - 1}  />
                                </td>
                                <td className="text-center">
                                    <input type="text" className={"form-control-sm " + (size.length > 2 ? "" : "w-100")}
                                    size={size.length - 1}  />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* table 2 */}

                <div className="overflow-auto ">
                    <table className="table-2 rotate-table-grid">
                        <thead>
                            <tr>
                                <th><span>Гушт</span></th>
                                <th><span>Much </span></th>
                                <th><span>Shorter Title</span></th>
                                <th><span>Much Much Longer Title</span></th>
                                <th><span>Shorter Title</span></th>
                                <th><span>Much Much Longer Title</span></th>
                                <th><span>Shorter Title</span></th>
                                <th><span>Much Much Longer Title</span></th>
                                <th><span>Shorter Title</span></th>
                                <th><span>Much Much Longer Title</span></th>
                                <th><span>Shorter Title</span></th>
                                <th><span>Much Much Longer Title</span></th>
                                <th><span>Shorter Title</span></th>
                                <th><span>Much Much Longer Title</span></th>
                                <th><span>Shorter Title</span></th>
                                <th><span>Much Much Longer Title</span></th>
                                <th><span>Shorter Title</span></th>
                                <th><span>Much Much Longer Title</span></th>
                                <th><span>Shorter Title</span></th>
                                <th><span>Much Much Longer Title</span></th>
                                <th><span>Shorter Title</span></th>
                                <th><span>Much Much Longer Title</span></th>
                                <th><span>Shorter Title</span></th>
                                <th><span>Much Much Longer Title</span></th>
                                <th><span>Shorter Title</span></th>
                                <th><span>Much Much Longer Title</span></th>
                                <th><span>Shorter Title</span></th>
                                <th><span>Much Much Longer Title</span></th>
                                <th><span>Shorter Title</span></th>
                                <th><span>Much Much Longer Title</span></th>
                                <th><span>Shorter Title</span></th>
                                <th><span>Much Much Longer Title</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center">
                                    <input type="text" className={"form-control-sm " + (size.length > 2 ? "" : "w-100")}
                                    size={size.length - 1} value={size} onChange={(e) => setSize(e.target.value)} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default RawMaterialConsumption
