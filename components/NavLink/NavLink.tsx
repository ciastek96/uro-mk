import React, { useContext, ReactNode, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import styled from "styled-components";
import Context from "../../Context/Context";

interface INavLinkProps {
    href: string;
    children: ReactNode;
  }

  const ListItem = styled.li`
  position: relative;
  cursor: pointer;

  & > a {
    color: ${({ theme }) => theme.color.white65};
    transition: color 0.15s ease-in-out;
  }

  & > a:hover,
  & > a:focus {
    color: ${({ theme }) => theme.color.white};
  }

  & > a::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    width: 30%;
    background-color: ${({ theme }) => theme.color.yellow};
    color: ${({ theme }) => theme.color.white65};
    transition: transform 0.15s ease-in-out;
    transform: scaleX(0);
    transform-origin: 0% 50%;
  }

  & > a:hover::before,
  & > a:focus::before {
    color: ${({ theme }) => theme.color.white65};
    border-color: ${({ theme }) => theme.color.yellow};
    transform: scaleX(100%);
  }

  & > a:active {
    color: ${({ theme }) => theme.color.white80};
  }
`;

const NavLink: React.FC<INavLinkProps> = ({ href, children }) => {
    const {setIsNavOpen} = useContext(Context);
    return (
    <ListItem onClick={() => setIsNavOpen(false)}>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </ListItem>
  )};

  export default NavLink;