import React from 'react';
import {Container, CssBaseline} from '@material-ui/core';
import {
    ContentContainer,
    DrawerContainer,
    DrawerContainerInner,
    MainContent
} from './styles.jsx';

const DefaultTemplate = ({children}) => (
    <>
        <CssBaseline/>
        <Container maxWidth='xl' disableGutters style={{margin: 0}}>
            <ContentContainer>
                <DrawerContainer>
                    <DrawerContainerInner>
                    </DrawerContainerInner>
                </DrawerContainer>
                <Container maxWidth='xl'>
                    <MainContent>
                        {children}
                    </MainContent>
                </Container>
            </ContentContainer>
        </Container>
    </>
);

export default DefaultTemplate;
