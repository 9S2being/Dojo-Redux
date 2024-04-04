import { useState, FormEvent, ChangeEvent } from 'react';
import { Typography, TextField, Button, Grid } from '@mui/material';
import { Link, useNavigate,  } from 'react-router-dom';
import { useAppDispatch, signIn } from '../../store';

export function SignIn() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(signIn(formData));
    navigate('/');
  };

  return (
    <>
      <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight:'90vh' }} onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="h5" align="center" style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '30px' }}>
                  Sign In
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Senha"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container item marginTop={1} justifyContent="center" alignItems="center">
              <Grid item md={12}>
                <Button type="submit" variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item md={12} marginTop={1} marginLeft={1}>
                <Typography variant="body1" align="center" style={{ fontSize: '12px' }}>
                  Ainda não possui uma conta?{' '}
                  <Link to="/SignUp">Cadastre-se</Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

