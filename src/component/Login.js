import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {
  
  const navigate = useNavigate(); // 라우터 Navigate

  // submit 로그인
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      user_id: data.get('user_id'),
      password: data.get('password'),
    });

    // 로그인 길이가 맞지 않을 시
    if(data.get('user_id').length < 4 | data.get('password').length < 8){
      alert('계정 최소 길이가 맞지 않습니다.');
      return ;
    }

    // 로그인 시도
    let login_info = {
      user_id : data.get('user_id'),
      password : data.get('password')
    }
    
    try{
      // API 전송 부분
      // const response = await axios.post( 
      //   'http://localhost:3333/api/login/post/login_check',   { user_id:login_info.user_id, user_password:login_info.password }     
      // );
      //alert(response.data.message);
    //로그인 성공
    // api 구성 전이므로 admin/password
    if( login_info.user_id === 'admin' && login_info.password === 'password' ){
     //if(response.data.message === '접속 계정 확인'){
       // 로그인 정보 저장 
       //alert(login_info.user_id);       
       localStorage.setItem('user_info', login_info.user_id);
       //로그인 후 Main 화면 ( Navigate )
       navigate("/");
     }
     //로그인 실패
     else{
      alert('아이디 비밀번호 정보가 일치하지 않습니다.');
      return ;
     }

    } catch (e) {
      console.log(e)
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="user_id"
              label="user_id"
              name="user_id"
              autoComplete="off"
              autoFocus              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
             <Grid container>
              <Grid item xs>
                <Link href="https://naver.com" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>           
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}