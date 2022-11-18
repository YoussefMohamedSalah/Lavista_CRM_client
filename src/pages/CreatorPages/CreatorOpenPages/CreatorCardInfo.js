/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Stack, Grid, Avatar, Typography } from '@mui/material';
// utils
import { fDate } from '../../../utils/formatTime';
import { fShortenNumber } from '../../../utils/formatNumber';
//
import SvgIconStyle from '../../../components/SvgIconStyle';
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

// const CardMediaStyle = styled('div')({
//   position: 'relative',
//   // paddingTop: 'calc(100% * 4 / 4)',
//   // borderRaduis:'50%',
//   borderRadius: '50%',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
// });
// const CardInfoStyle = styled('div')({
//   position: 'relative',
//   // paddingTop: 'calc(100% * 2 / 4)',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
// });

const TitleStyle = styled(Link)({
  height: 44,
  overflow: 'hidden',
  fontWeight: 600,
  fontSize: '1rem',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});

// const AvatarStyle = styled(Avatar)(({ theme }) => ({
//   zIndex: 9,
//   width: 32,
//   height: 32,
//   position: 'absolute',
//   left: theme.spacing(3),
//   bottom: theme.spacing(-2),
// }));

const InfoStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(1.2),
  color: theme.palette.text.disabled,
}));

const CoverImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  // position: 'absolute',
  borderRadius: '50%',
});

// ----------------------------------------------------------------------

CreatorCardInfo.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function CreatorCardInfo({ post, index }) {
  const { cover, title, view, comment, share, author, createdAt } = post;
  // const latestPostLarge = index === 0;
  // const latestPost = index === 1 || index === 2;
  const latestPostLarge = '';
  const latestPost = '';

  const POST_INFO = [
    // { number: comment, icon: 'eva:message-circle-fill' },
    { number: view, icon: 'eva:eye-fill' },
    { number: share, icon: 'eva:share-fill' },
  ];

  return (
    <Stack
      direction="column"
      sx={{ position: 'relative', background: 'transparent', width: '9.4rem', height: '16.5rem' }}
      m={2.3}
    >
      <Link to="#" color="inherit" variant="subtitle2" underline="hover" component={RouterLink} flex={1.4}>
        <CoverImgStyle alt={title} src={cover} />
      </Link>
      <Box flex={1}>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <TitleStyle
            to="#"
            color="inherit"
            variant="subtitle2"
            underline="hover"
            component={RouterLink}
            sx={{
              paddingTop: '0.7rem',
              ...(latestPostLarge && { typography: 'h5' }),
              ...((latestPostLarge || latestPost) && {
                color: 'common.white',
              }),
            }}
          >
            Youssef M.salah
          </TitleStyle>

          <Typography variant="body2" sx={{ lineHight: '0.8' }}>
            Web Developer
          </Typography>

          <InfoStyle>
            {POST_INFO.map((info, index) => (
              <Box
                key={index}
                sx={{
                  pt: 0,
                  display: 'flex',
                  alignItems: 'center',
                  ml: index === 0 ? 0 : 1.5,
                  ...((latestPostLarge || latestPost) && {
                    color: 'grey.500',
                  }),
                }}
              >
                <Iconify icon={info.icon} sx={{ width: 16, height: 16, mr: 0.5 }} />
                <Typography variant="caption">{fShortenNumber(info.number)}</Typography>
              </Box>
            ))}
          </InfoStyle>
        </Stack>
      </Box>
    </Stack>
  );
}

// <CardMediaStyle
// sx={{
//   ...((latestPostLarge || latestPost) && {
//     // pt: 'calc(100% * 4 / 3)',
//     '&:after': {
//       top: 0,
//       content: "''",
//       width: '100%',
//       height: '100%',
//       position: 'absolute',
//       // bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
//     },
//   }),
//   ...(latestPostLarge && {
//     pt: {
//       xs: 'calc(100% * 4 / 3)',
//       sm: 'calc(100% * 3 / 4.66)',
//     },
//   }),
// }}
// >

// <CoverImgStyle alt={title} src={cover} />
// </CardMediaStyle>

// <CardInfoStyle
// sx={{
//   pt: 0,
//   ...((latestPostLarge || latestPost) && {
//     bottom: 0,
//     width: '100%',
//     position: 'absolute',
//   }),
// }}
// >
// {/* <Typography gutterBottom variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
//   {fDate(createdAt)}
// </Typography> */}

// <TitleStyle
//   to="#"
//   color="inherit"
//   variant="subtitle2"
//   underline="hover"
//   component={RouterLink}
//   sx={{
//     ...(latestPostLarge && { typography: 'h5', height: 60 }),
//     ...((latestPostLarge || latestPost) && {
//       color: 'common.white',
//     }),
//   }}
// >
//   youssef M.salah
// </TitleStyle>

// <InfoStyle>
// {POST_INFO.map((info, index) => (
//   <Box
//     key={index}
//     sx={{
//       pt: 0,
//       display: 'flex',
//       alignItems: 'center',
//       ml: index === 0 ? 0 : 1.5,
//       ...((latestPostLarge || latestPost) && {
//         color: 'grey.500',
//       }),
//     }}
//   >
//     <Iconify icon={info.icon} sx={{ width: 16, height: 16, mr: 0.5 }} />
//     <Typography variant="caption">{fShortenNumber(info.number)}</Typography>
//   </Box>
// ))}
// </InfoStyle>
// </CardInfoStyle>
