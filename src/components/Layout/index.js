import Sidebar from '../Topbar';
import './index.scss';
import { Outlet } from 'react-router-dom';

let para1 = '('
let para2 = '){'
let bottom2 = '}'

const Layout = () => {
    return( 
        <div className='App'>
            <Sidebar/>
            <div className='page'>
                <span className='tags top-tags'>
                    <p>
                        <span className='darkbl'>int</span>
                        <span className='yellow'> main</span>
                        <span className='darkye'>{para1}</span>
                        <span className='darkbl'>int</span>
                        <span className='lightbl'> argc</span>
                        <span className='white'>,</span>
                        <span className='darkbl'> char</span>
                        <span className='white'>*</span>
                        <span className='lightbl'> argv</span>
                        <span className='purp'>[]</span>
                        <span className='darkye'>{para2}</span>
                    </p>
                </span>
                <Outlet/>
                <span className='tags bottom-tags'>
                    <p>
                        <span>&emsp;&emsp;&emsp;&emsp;</span>
                        <span className='purp'>return</span>
                        <span className='green'> 0</span>
                        <span className='white'>;</span>
                    </p>
                    <p>
                        <span className='darkye'>{bottom2}</span>
                    </p>
                </span>
            </div>
        </div>
    )
}

export default Layout