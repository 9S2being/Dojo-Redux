import React, { useState } from 'react';
import { Typography, TextField, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
    setIsFormValid(email.length > 0 && password.length > 0);
  };

  const handleLogin = () => {
    if (!isFormValid) {
      return alert("Preencha todos os campos para prosseguir");
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '90vh' }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h5" align="center" style={{
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                fontSize: '30px'
              }}>
                Sign In
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                label="Email"
                name="email"
                value={email}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                label="Senha"
                name="password"
                type="password"
                value={password}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container item marginTop={2} justifyContent="center" alignItems="center">
            <Grid item md={12}>
              <Button onClick={handleLogin} variant="contained" fullWidth disabled={!isFormValid}>
                Login
              </Button>
            </Grid>
            <Grid item md={12} marginTop={2} marginLeft={9}>
              <Typography variant="body1" align="center" component={Link} to="/SignUp" style={{ fontSize: '15px' }}>
                Ainda não possui uma conta? Cadastre-se
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
