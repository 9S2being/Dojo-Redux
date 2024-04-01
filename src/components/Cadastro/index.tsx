import { useState } from 'react';
import { Typography, TextField, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (!email || !password || !confirmPassword) {
      return alert("Preencha todos os campos para prosseguir");
    }

    if (password !== confirmPassword) {
      return alert("As senhas devem ser iguais");
    }

  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '90vh' }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center" >
        <Grid item xs={12} sm={6} md={4}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h5" align="center" style={{
                fontFamily: 'Montserrat', 
                fontWeight: 'bold',
                fontSize: '30px'
              }}>
                Sign Up
              </Typography>
            </Grid>
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
            <Grid item>
              <TextField
                label="Confirmação de Senha"
                type="password"
                value={confirmPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item>
              <Button onClick={handleSignUp} variant="contained" fullWidth>
                Cadastrar
              </Button>
            </Grid>

            <Grid item md={12} marginLeft={14}>
              <Typography variant="body1" align="center" component={Link} to="/" style={{fontSize: '15px'}}>
                Ja possui conta? vá para Login
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
