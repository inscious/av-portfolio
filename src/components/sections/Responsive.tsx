import React from "react";
import styled from "styled-components";
import { Container, Section, SectionTitle } from "../common";

const DevicePreview = styled.div`
    margin-top: 100px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    gap: 4rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
`;

const Device = styled.div`
    position: relative;
`;

const DeviceMobile = styled.div`
    width: 250px;
    height: 500px;
    background-color: ${({ theme }) => theme.colors.cardBackground};
    border-radius: 30px;
    padding: 10px;
    box-shadow: 0 20px 40px ${({ theme }) => theme.colors.boxShadow};
    overflow: hidden;
`;

const DeviceDesktop = styled.div`
    width: 500px;
    height: 300px;
    background-color: ${({ theme }) => theme.colors.cardBackground};
    border-radius: 10px;
    padding: 5px 5px 20px 5px;
    box-shadow: 0 20px 40px ${({ theme }) => theme.colors.boxShadow};
    position: relative;
    overflow: hidden;

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 20px;
        background-color: ${({ theme }) => theme.colors.secondaryBackground};
        border-radius: 5px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        width: 100%;
        max-width: 400px;
    }
`;

const DeviceScreen = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    border-radius: 20px;
    position: relative;
`;

const DesktopScreen = styled(DeviceScreen)`
    border-radius: 5px;
`;

const ScreenContent = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230078FF' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E");
`;

const MobilePreviewHeader = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    background-color: ${({ theme }) => theme.colors.primaryAccent};
    color: white;
`;

const MobilePreviewContent = styled.div`
    padding: 15px;
`;

const DesktopPreviewHeader = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    background-color: ${({ theme }) => theme.colors.primaryAccent};
    color: white;
`;

const DesktopPreviewContent = styled.div`
    display: flex;
    height: calc(100% - 30px);
`;

const DesktopSidebar = styled.div`
    width: 150px;
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
`;

const DesktopMain = styled.div`
    flex: 1;
    padding: 15px;
`;

const Responsive: React.FC = () => {
    return (
        <Section>
            <Container>
                <SectionTitle>Responsive Design</SectionTitle>
                <DevicePreview>
                    <Device>
                        <DeviceMobile>
                            <DeviceScreen>
                                <MobilePreviewHeader>
                                    <div>TechDual</div>
                                    <div>☰</div>
                                </MobilePreviewHeader>
                                <MobilePreviewContent>
                                    <ScreenContent />
                                </MobilePreviewContent>
                            </DeviceScreen>
                        </DeviceMobile>
                    </Device>
                    <Device>
                        <DeviceDesktop>
                            <DesktopScreen>
                                <DesktopPreviewHeader>
                                    <div>TechDual Portfolio</div>
                                </DesktopPreviewHeader>
                                <DesktopPreviewContent>
                                    <DesktopSidebar />
                                    <DesktopMain>
                                        <ScreenContent />
                                    </DesktopMain>
                                </DesktopPreviewContent>
                            </DesktopScreen>
                        </DeviceDesktop>
                    </Device>
                </DevicePreview>
            </Container>
        </Section>
    );
};

export default Responsive;
