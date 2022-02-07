import React from 'react'
import { SidebaContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SideBtnWrap,SidebarMenu, SidebarRoute } from './sidebarelements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebaContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        about
                    </SidebarLink>
                    <SidebarLink to="platform" onClick={toggle}>
                        platform
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        sign up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute>signin</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebaContainer>
    )
}

export default Sidebar;
