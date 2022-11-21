import { Header, StyledLink } from "./SharedLayout.styled";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
    return (
         <> 
    <Header>
      <nav>
        <StyledLink to={'/'}>Home</StyledLink>
        <StyledLink to={'/movies'}>Movies</StyledLink>
      </nav>
    </Header>
    <Outlet/>
    </> 
    )
}

export default SharedLayout;