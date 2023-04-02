import React from 'react'
import {Routes, Route, Navigate, NavLink} from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
    // ggg
    return (
        <div>
            {/*<div><NavLink to={PATH.PRE_JUNIOR}>PreJunior</NavLink></div>*/}
            {/*<div><NavLink to={PATH.JUNIOR}>'/Junior'</NavLink></div>*/}
            {/*<div><NavLink to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink></div>*/}
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                {/*автомат отключение первой компоненты*/}

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>

                {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Pages
