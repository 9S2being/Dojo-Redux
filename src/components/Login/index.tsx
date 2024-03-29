import { useState } from 'react'
import { TextField, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    if (!email || !password) {
      return alert("Preencha todos os campos para prosseguir");
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                label="Email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                label="Senha"
                type="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container item marginTop={2}>
            <Grid item md={12}>
              <Button onClick={handleLogin} variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            
            <Grid item md={12}>
            <Link to="/SignUp">
              <Button variant="text" fullWidth>Ainda não possue uma conta?</Button>
            </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
