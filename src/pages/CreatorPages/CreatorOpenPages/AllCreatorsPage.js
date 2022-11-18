import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../../../components/Page';
import Iconify from '../../../components/Iconify';
import CreatorCardInfo from './CreatorCardInfo';
import CreatorBtn from '../../../components/Btns/CreatorBtn/CreatorBtn';
// mock
import POSTS from '../../../_mock/blog';
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
export default function AllCreatorsPage() {
  return (
    <Page title="Creators">
      <Container sx={{margin:'0', padding:'0'}}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Creators
          </Typography>
          <CreatorBtn btnContent={'Join Now'} path={'/dashboard/creatorprofile'} />
        </Stack>
        <Stack alignItems="center" justifyContent="center" m={1}>
          <Stack direction='row'  sx={{flexWrap:'wrap'}}>
            {POSTS.map((post, index) => (
              <CreatorCardInfo key={post.id} post={post} index={index} />
            ))}
          </Stack>
        </Stack>

        {/* <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch posts={POSTS} />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack> */}
      </Container>
    </Page>
  );
}
