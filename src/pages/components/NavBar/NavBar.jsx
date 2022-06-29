import './styles/navbar.css';
import Logo from '../../assets/nasa-3.svg';
import { SearchOutlined } from '@ant-design/icons';
import { useSearch } from './hooks';


const NavBar = () =>{
    
    const [refSearch, onSearch] = useSearch();

    return(
        <header className="nav-header">
                <div className='logo-nav'>
                    <img src={Logo} alt='Logo'/>
                </div>
                <div className='search'>
                    <input ref={refSearch}  type={'search'}/>
                    <SearchOutlined  className='search-icon' onClick={onSearch}/>
                </div>
                <div className='items-right-nav'>
                    <div><a href='/'>Home</a></div>
                    <div><a href='/'>About Us</a></div>
                    <div><a href='/'>Help</a></div>
                </div>
            </header>
    )
}

export default NavBar;