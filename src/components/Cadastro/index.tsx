import { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
      if(!email || !password || !confirmPassword) {
        return alert("Preencha todos os campos para prosseguir");
      }

      if(password!== confirmPassword) {
        return alert("As senhas devem ser iguais");
      }


  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
    <Grid container spacing={2} justifyContent="center" alignItems="center" >
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
      </Grid>
    </Grid>
  </Grid>
  </div>
  );
};

export default SignUp;
