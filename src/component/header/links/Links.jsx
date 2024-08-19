
import {NavLink,useLocation } from 'react-router-dom'

const links=[
    {
        path:'/',
        pathName:'home'
    },
    {
        path:'/up-skilling',
        pathName:'upskillings trainings'
    },
    {
        path:'/webinars',
        pathName:'webinars'
    },
    {
        path:'/overview',
        pathName:'overview'
    },
    {
        path:'/about-us',
        pathName:'about us'
    },
    {
        path:'/internship',
        pathName:'internship'
    }

]

function Links() {


    let location =useLocation()
    let currentPath=location.pathname
    console.log(currentPath)

  return (
    <ul className='all-links'>
    {
        links.map((link) => (
            <li key={link.pathName}>
                <NavLink 
                    to={link.path} 
                    className={currentPath===link.path?'active':''}
                >
                    {link.pathName}
                </NavLink>
            </li>
        ))
    }
</ul>
  )
}

export default Links