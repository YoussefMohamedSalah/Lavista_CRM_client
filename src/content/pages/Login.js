import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';

// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography } from '@mui/material';

// hooks
import useResponsive from '../../hooks/useResponsive';
// loggin form
import { LoginForm } from '../../auth/login';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
    top: 0,
    zIndex: 9,
    lineHeight: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    padding: theme.spacing(3),
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
        alignItems: 'flex-start',
        padding: theme.spacing(7, 5, 0, 7),
    },
}));

const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Login() {
    const smUp = useResponsive('up', 'sm');

    return (
        <>
            <Helmet>
                <title>login Page</title>
            </Helmet>
            <RootStyle>
                <HeaderStyle>

                    {smUp && (
                        <Typography variant="body2" sx={{ mt: { md: -2 }, position: 'absolute', left: '20px' }}>
                            Don’t have an account? {''}
                            <Link variant="subtitle2" component={RouterLink} to="/register">
                                Get started
                            </Link>
                        </Typography>
                    )}
                </HeaderStyle>

                <Container maxWidth="sm">
                    <ContentStyle>
                        <Typography variant="h2" gutterBottom>
                            Sign In
                        </Typography>

                        <Typography sx={{ color: 'text.secondary', mb: 5 }}>Enter your details below.</Typography>

                        <LoginForm />

                        {!smUp && (
                            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                                Don’t have an account?{' '}
                                <Link variant="subtitle2" component={RouterLink} to="/register">
                                    Get started
                                </Link>
                            </Typography>
                        )}
                    </ContentStyle>
                </Container>
            </RootStyle>
            <Footer />
        </>

    );
}
