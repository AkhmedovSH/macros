import React from 'react'

const Production = () => {
    return (
        <div>
            <h1 className="text-center">Производства</h1>
            <div className="container">
                <div className="row mb-3">
                    {/* Header */}
                    <div className="col-md-3">
                        <button className="btn btn-primary w-100">Приготовление смеси</button>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-primary w-100">Очистить</button>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-primary w-100">Удалить</button>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                        <div className="mr-3">Дата заказа:</div>
                        <div className="">20.12.2020</div>
                    </div>
                </div>

                {/* Info */}

                <h4 className="w-100"> Info </h4>

                <div className="row mb-5">
                    <div className="col-md-4">
                        Тип ГП:
                        <select className="form-control-sm">
                            <option value=""></option>
                            <option value="">Варенье</option>
                            <option value="">Сосиски</option>
                            <option value="">Тушенка</option>
                        </select>
                    </div>
                    <div className="col-md-4 " >
                        Ответственный:
                        <select className="form-control-sm">
                            <option value=""></option>
                            <option value="">Ориф</option>
                            <option value="">Рабочий1</option>
                            <option value="">Рабочий2</option>
                            <option value="">Рабочий3</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <input type="text" className="form-control-sm" />
                    </div>
                </div>
                {/* 2 Column */}
                <div className="row mb-2">
                    <div className="col-md-4">
                        <div className="w-75 text-center n-mt-4">
                            <label htmlFor="name">Наименование товара: </label> <br />
                            <select name="name" className="form-control-sm w-100">
                                <option value=""></option>
                                <option value="">Ориф</option>
                                <option value="">Рабочий1</option>
                                <option value="">Рабочий2</option>
                                <option value="">Рабочий3</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="">Вес замеса:</label>
                        <input type="text" className="form-control-sm" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="date">День</label>
                        <input type="date" name='date' className="form-control-sm" />
                    </div>
                </div>
                <hr />
                <div className={"d-flex flex-column flex-wrap h-1260"}>
                    <div className="my-2 d-flex">
                       <span className="mr-1">1</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div><div className="my-2 d-flex">
                       <span className="mr-1">2</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">3</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">4</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">5</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">6</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">7</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">8</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">9</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">10</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">11</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">12</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div><div className="my-2 d-flex">
                       <span className="mr-1">13</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div><div className="my-2 d-flex">
                       <span className="mr-1">14</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">15</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">16</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">17</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">18</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">19</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">20</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">21</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">22</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">23</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">24</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">25</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">26</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">27</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">28</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">29</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">30</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">31</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">32</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>
                    <div className="my-2 d-flex">
                       <span className="mr-1">33</span> <div className="border">Гушт <input type="text" className="form-control-sm " /></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Production
