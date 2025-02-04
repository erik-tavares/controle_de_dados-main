"use client";
import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { NumericFormat } from "react-number-format";
import InputMask from "react-input-mask";
import BadgeIcon from "@mui/icons-material/Badge";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  AppBar,
  Toolbar,
  Grid,
  Paper,
  TextField,
  MenuItem,
  Button,
  Menu,
  IconButton,
  Tooltip,
  Modal,
  Select,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PeopleIcon from "@mui/icons-material/People";
import StoreIcon from "@mui/icons-material/Store";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";
import Logo from "@/assets/img/logo_logaux_v3.png";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Business,
  DirectionsBusRounded,
  DriveEtaRounded,
  Padding,
} from "@mui/icons-material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const createDemoTheme = (isDarkMode) =>
  createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: { main: "#091f33" },
      background: {
        default: isDarkMode ? "#121212" : "#ffffff",
        paper: isDarkMode ? "#1e1e1e" : "#f5f5f5",
      },
      text: {
        primary: isDarkMode ? "#ffffff" : "#000000",
        secondary: isDarkMode ? "#cfcfcf" : "#5f5f5f",
      },
    },
    typography: {
      allVariants: {
        color: isDarkMode ? "#ffffff" : "#000000",
        transition: "color 0.3s ease",
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            color: isDarkMode ? "#ffffff" : "#000000",
            transition: "color 0.3s ease",
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            transition: "background-color 0.3s ease, color 0.3s ease",
            "& label.Mui-focused": {
              color: isDarkMode ? "#ffffff" : "#000000",
            },
            "& input": {
              color: isDarkMode ? "#ffffff" : "#000000",
            },
            "& .MuiOutlinedInput-root": {
              backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
              "& fieldset": {
                borderColor: isDarkMode ? "#ffffff" : "#000000",
              },
            },
          },
        },
      },
    },
  });

function Header({ isDarkMode, toggleTheme }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    setModalOpen(true);
    handleClose();
  };

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "15px",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box sx={{ position: "absolute", left: 16 }}>
          <Tooltip title="Dados do Motorista" arrow>
            <IconButton
              color="inherit"
              onClick={handleMenuClick}
              sx={{
                "&:hover": {
                  backgroundColor: "transparent", // Remove o fundo branco no hover
                },
              }}
            >
              <BadgeIcon />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              sx: {
                backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                color: isDarkMode ? "#ffffff" : "#000000",
              },
            }}
          >
            <MenuItem onClick={handleProfileClick}>
              Perfil Do Motorista
            </MenuItem>
          </Menu>
        </Box>

        <Box sx={{ height: 40 }}>
          <Image
            src={Logo}
            alt="Logaux logo"
            width={220}
            height={80}
            priority
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            right: 16,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Tooltip
            title={isDarkMode ? "Desativar modo escuro" : "Ativar modo escuro"}
            arrow
          >
            <IconButton
              onClick={toggleTheme}
              color="inherit"
              sx={{
                "&:hover": {
                  backgroundColor: "transparent", 
                },
              }}
            >
              {isDarkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Tooltip>
        </Box>

        {/* Modal de Perfil do Motorista */}
        <Modal
          open={modalOpen}
          onClose={() => {}} 
          disableEscapeKeyDown
          BackdropProps={{
            onClick: (e) => e.stopPropagation(),
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: isDarkMode ? "#1e1e1e" : "#ffffff",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
              width: "90%", 
              maxWidth: 500, 
              minHeight: 350, 
              display: "flex",
              flexDirection: "column",
              justifyContent: "center", 
              alignItems: "center",
              color: isDarkMode ? "#ffffff" : "#000000",
              textAlign: "center",
              border: `4px solid ${isDarkMode ? "#ffffff" : "#052c65"}`,
            }}
          >
            <IconButton
              onClick={() => setModalOpen(false)}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: isDarkMode ? "#ffffff" : "#000000",
                transition: "color 0.3s ease",
                "&:hover": { color: "#ff4444", backgroundColor: "transparent" },
              }}
            >
              ✖
            </IconButton>

            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: isDarkMode ? "#ffffff" : "#000000",
                mt: 2,
              }}
            >
              Perfil do Motorista
            </Typography>

            <Box sx={{ width: "100%", maxWidth: 400, mt: 3 }}>
              <Typography variant="body1" sx={{ fontSize: "1.1rem", mb: 2 }}>
                <strong>Nome:</strong> João da Silva
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "1.1rem", mb: 2 }}>
                <strong>Idade:</strong> 45 anos
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "1.1rem", mb: 2 }}>
                <strong>CNH:</strong> AB123456
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "1.1rem", mb: 2 }}>
                <strong>Placa do Veículo:</strong> XYZ-5678
              </Typography>
            </Box>
          </Box>
        </Modal>
      </Toolbar>
    </AppBar>
  );
}
const formularios = {
  "novo-embarque": {
    title: "Nova Viagem",
    fields: [
      {
        name: "placaVeiculo",
        label: "Placa do Veiculo",
        select: true,
        options: [
          { value: "XYZ5678", label: "XYZ5678" },
          { value: "AAA1111", label: "AAA1111" },
          { value: "ABC1234", label: "ABC1234" },
        ],
      },
      {
        name: "placaCarreta1",
        label: "Placa Carreta 1",
        select: true,
        options: [
          { value: "ZZZ9999", label: "ZZZ9999" },
          { value: "YYY8888", label: "YYY8888" },
        ],
      },
      {
        name: "placaCarreta2",
        label: "Placa Carreta 2",
        select: true,
        options: [
          { value: "XXX7777", label: "XXX7777" },
          { value: "WWW6666", label: "WWW6666" },
        ],
      },
      { name: "km", label: "KM Inicial" },
      { name: "origem", label: "Origem" },
      { name: "destino", label: "Destino" },
      {
        name: "carga",
        label: "Carga",
        select: true,
        options: [
          { value: "opcao1", label: "Opção 1" },
          { value: "opcao2", label: "Opção 2" },
        ],
      },
      { name: "peso", label: "Peso (KG)" },
      { name: "tarifa", label: "Tarifa (R$)" },
      { name: "ctrc", label: "CTRC" },
      { name: "fotoNotaFiscal", label: "NF" },
    ],
  },
  "finalizar-viagem": {
    title: "Finalizar Viagem",
    fields: [
      // { name: "data", label: "Data" },
      { name: "km", label: "KM" },
      { name: "fotoComprovante", label: "Foto Comprovante de Entrega" },
    ],
  },
  abastecimento: {
    title: "Abastecimento",
    fields: [
      // { name: "data", label: "Data" },
      { name: "km", label: "KM" },
      { name: "nomePosto", label: "Nome do Posto" },
      { name: "quantidadeLitros", label: "Quantidade de Litros" },
      { name: "endereço", label: "Endereço" },
      { name: "valorAbastecimento", label: "Valor do Abastecimento" },
      { name: "fotoNotaFiscal", label: "Foto da Nota Fiscal" },
    ],
  },
  servicos: {
    title: "Serviços",
    fields: [
      // { name: "data", label: "Data" },
      { name: "km", label: "KM" },
      { name: "nomeOficina", label: "Nome da Oficina" },
      { name: "descricaoServicos", label: "Descrição dos Serviços" },
      { name: "endereço", label: "Endereço" },
      { name: "valorServicos", label: "Valor dos Serviços" },
      { name: "fotoNotaFiscal", label: "Foto da Nota Fiscal" },
    ],
  },
  adiantamento: {
    title: "Adiantamento para Despesas de Viagem",
    fields: [
      // { name: "data", label: "Data" },
      { name: "numeroRecibo", label: "Nº Recibo" },
      { name: "localidade", label: "Localidade" },
      { name: "valor", label: "Valor" },
      { name: "descricao", label: "Descrição" },
    ],
  },
  deslocamento: {
    title: "Deslocamento",
    fields: [
      // { name: "data", label: "Data" },
      { name: "placaVeiculo", label: "Placa do Veiculo" },
      { name: "placaCarreta1", label: "Placa Carreta 1" },
      { name: "placaCarreta2", label: "Placa Carreta 2" },
      { name: "km", label: "KM" },
      { name: "origem", label: "Origem" },
      { name: "destino", label: "Destino" },
      { name: "carga", label: "Carga" },
      { name: "peso", label: "Peso" },
      { name: "tarifa", label: "Tarifa" },
      { name: "ctrc", label: "CTRC" },
      { name: "fotoNotaFiscal", label: "NF" },
    ],
  },
  "contatos-filiais": {
    title: "Contatos Filiais",
    fields: [{ name: "endereco", label: "Endereço" }],
  },
  consultas: {
    title: "Consultas",
    fields: [
      { name: "consultaInicio", label: "Inicio" },
      // { name: "consultaFim", label: "Fim" },
      // { name: "statusAcerto", label: "Acerto" },
    ],
  },
};

function FormularioPadrao({ title, fields, onBack, isDarkMode }) {
  const [formData, setFormData] = React.useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Dados enviados:", formData);
  };

  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedClient, setSelectedClient] = React.useState("");
  const [selectedCity, setSelectedCity] = React.useState("");

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleSelect = () => {
    setFormData({
      ...formData,
      destino: `${selectedClient} - ${selectedCity}`,
    });
    handleCloseModal();
  };
  const [hovered, setHovered] = useState(false);
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const [filtroStatus, setFiltroStatus] = useState("todos");

  return (
    <Box sx={{ p: 4, maxWidth: 600, mx: "auto" }}>
      <Tooltip title="Voltar para o menu principal" arrow>
        <IconButton
          onClick={onBack}
          onMouseEnter={() => {
            if (window.innerWidth > 768) setHovered(true);
          }}
          onMouseLeave={() => {
            if (window.innerWidth > 768) setHovered(false);
          }}
          sx={{
            color: isDarkMode ? "#ffffff" : "#000000",
            transition: "color 0.3s ease",
            "&:hover": {
              color: window.innerWidth > 768 ? "#ff4444" : undefined,
              backgroundColor: "transparent",
            },
          }}
        >
          {window.innerWidth > 768 && hovered ? (
            <LogoutIcon />
          ) : (
            <ArrowBackIcon />
          )}
        </IconButton>
      </Tooltip>

      <Typography
        variant="h4"
        sx={{
          color: isDarkMode ? "#ffffff" : "#000000",
          textAlign: "center",
          mt: 2,
        }}
      >
        {title}
      </Typography>
      <Box component="form">
        {fields.map((field) => {
          const isPlacaField = [
            "placaVeiculo",
            "placaCarreta1",
            "placaCarreta2",
          ].includes(field.name);
          const isOutraPlaca = formData[field.name] === "outra";

          if (field.name === "destino") {
            return (
              <Box key={field.name}>
                <TextField
                  label="Destino"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={formData[field.name]}
                  onClick={handleOpenModal}
                  InputProps={{
                    style: { color: isDarkMode ? "#ffffff" : "#000000" },
                  }}
                  InputLabelProps={{
                    style: { color: isDarkMode ? "#cfcfcf" : "#000000" },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": { borderColor: "#ffffff" },
                  }}
                />
                <Modal open={modalOpen} onClose={() => {}}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      bgcolor: "#052c65",
                      boxShadow: 24,
                      p: 4,
                      borderRadius: 2,
                      width: "90%",
                      maxWidth: 500,
                      color: "#ffffff",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "#ffffff" }}
                      >
                        Selecione Cliente e Cidade
                      </Typography>
                      <IconButton
                        onClick={handleCloseModal}
                        sx={{
                          color: "#ffffff",
                          transition: "color 0.3s ease",
                          "&:hover": {
                            color: "#ff4444",
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        ✖
                      </IconButton>
                    </Box>

                    <TextField
                      fullWidth
                      label="Cliente"
                      variant="outlined"
                      margin="normal"
                      value={selectedClient}
                      onChange={(e) => setSelectedClient(e.target.value)}
                      InputProps={{ style: { color: "#ffffff" } }}
                      InputLabelProps={{ style: { color: "#cfcfcf" } }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "#1e1e1e",
                          "& fieldset": { borderColor: "#ffffff" },
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Cidade"
                      variant="outlined"
                      margin="normal"
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      InputProps={{ style: { color: "#ffffff" } }}
                      InputLabelProps={{ style: { color: "#cfcfcf" } }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "#1e1e1e",
                          "& fieldset": { borderColor: "#ffffff" },
                        },
                      }}
                    />

                    <Button
                      variant="contained"
                      onClick={handleSelect}
                      sx={{ backgroundColor: "#198754", mt: 2 }}
                    >
                      Confirmar Seleção
                    </Button>
                  </Box>
                </Modal>
              </Box>
            );
          }

          return isPlacaField ? (
            <Box key={field.name}>
              <TextField
                name={field.name}
                value={formData[field.name]}
                onChange={(event) =>
                  setFormData({ ...formData, [field.name]: event.target.value })
                }
                label={field.label}
                variant="outlined"
                margin="normal"
                fullWidth
                select
                InputProps={{
                  style: { color: isDarkMode ? "#ffffff" : "#000000" },
                }}
                InputLabelProps={{
                  style: { color: isDarkMode ? "#cfcfcf" : "#000000" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                    "& fieldset": {
                      borderColor: isDarkMode ? "#ffffff" : "#000000",
                    },
                  },
                }}
              >
                {field.options?.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
                <MenuItem value="outra">Outra</MenuItem>
              </TextField>
              {isOutraPlaca && (
                <InputMask
                  mask="aaa9*99"
                  value={formData[`nova_${field.name}`] || ""}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      [`nova_${field.name}`]: event.target.value,
                    })
                  }
                >
                  {() => (
                    <TextField
                      name={`nova_${field.name}`}
                      label="Informe a nova placa"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      InputProps={{
                        style: { color: isDarkMode ? "#ffffff" : "#000000" },
                      }}
                      InputLabelProps={{
                        style: { color: isDarkMode ? "#cfcfcf" : "#000000" },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                          "& fieldset": {
                            borderColor: isDarkMode ? "#ffffff" : "#000000",
                          },
                        },
                      }}
                    />
                  )}
                </InputMask>
              )}
            </Box>
          ) : field.name === "fotoComprovante" ? (
            <Box key={field.name}>
              <Typography
                sx={{
                  color: isDarkMode ? "#ffffff" : "#000000",
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                {field.label}
              </Typography>

              <input
                type="file"
                accept="image/*"
                capture="environment"
                multiple
                onChange={(event) => {
                  const files = Array.from(event.target.files);
                  if (files.length) {
                    setFormData({
                      ...formData,
                      [field.name]: [...(formData[field.name] || []), ...files],
                    });
                  }
                }}
                style={{ display: "none" }}
                id="fotoComprovante-input"
              />

              <label htmlFor="fotoComprovante-input">
                <Button
                  variant="contained"
                  component="span"
                  sx={{
                    backgroundColor: "rgb(5, 44, 101)",
                    "&:hover": { backgroundColor: "#198754" },
                  }}
                >
                  📷 Tirar Foto do Comprovante
                </Button>
              </label>

              {formData[field.name] && formData[field.name].length > 0 && (
                <Box sx={{ mt: 2 }}>
                  {formData[field.name].map((file, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: "#052c65",
                        p: 1,
                        borderRadius: 1,
                        mb: 1,
                      }}
                    >
                      <Typography sx={{ color: "#ffffff" }}>
                        📷 {file.name}
                      </Typography>
                      <Button
                        onClick={() => {
                          const newFiles = [...formData[field.name]];
                          newFiles.splice(index, 1);
                          setFormData({ ...formData, [field.name]: newFiles });
                        }}
                        variant="contained"
                        color="error"
                      >
                        Remover
                      </Button>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          ) : field.name === "tarifa" ? (
            <Tooltip title="Informe a tarifa em R$" arrow key={field.name}>
              <NumericFormat
                name={field.name}
                value={formData[field.name]}
                onValueChange={(values) =>
                  setFormData({ ...formData, [field.name]: values.value })
                }
                label={field.label}
                customInput={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                allowNegative={false}
                thousandSeparator="."
                decimalSeparator=","
                prefix="R$ "
                InputProps={{
                  style: { color: isDarkMode ? "#ffffff" : "#000000" },
                }}
                InputLabelProps={{
                  style: { color: isDarkMode ? "#cfcfcf" : "#000000" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                    "& fieldset": {
                      borderColor: isDarkMode ? "#ffffff" : "#000000",
                    },
                  },
                }}
              />
            </Tooltip>
          ) : field.name === "valorServicos" ? (
            <Tooltip
              title="Informe o valor dos serviços em R$"
              arrow
              key={field.name}
            >
              <NumericFormat
                name={field.name}
                value={formData[field.name]}
                onValueChange={(values) =>
                  setFormData({ ...formData, [field.name]: values.value })
                }
                label={field.label}
                customInput={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                allowNegative={false}
                thousandSeparator="."
                decimalSeparator=","
                prefix="R$ "
                InputProps={{
                  style: { color: isDarkMode ? "#ffffff" : "#000000" },
                }}
                InputLabelProps={{
                  style: { color: isDarkMode ? "#cfcfcf" : "#000000" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                    "& fieldset": {
                      borderColor: isDarkMode ? "#ffffff" : "#000000",
                    },
                  },
                }}
              />
            </Tooltip>
          ) : field.name === "km" ? (
            <Tooltip
              title="Informe o KM apenas com números inteiros"
              arrow
              key={field.name}
            >
              <NumericFormat
                name={field.name}
                value={formData[field.name]}
                onValueChange={(values) =>
                  setFormData({ ...formData, [field.name]: values.value })
                }
                label={field.label}
                customInput={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                allowNegative={false}
                decimalScale={0}
                allowLeadingZeros={false}
                isNumericString={true}
                InputProps={{
                  style: { color: isDarkMode ? "#ffffff" : "#000000" },
                }}
                InputLabelProps={{
                  style: { color: isDarkMode ? "#cfcfcf" : "#000000" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                    "& fieldset": {
                      borderColor: isDarkMode ? "#ffffff" : "#000000",
                    },
                  },
                }}
              />
            </Tooltip>
          ) : field.name === "peso" ? (
            <Tooltip
              title="Informe o peso em KG (ex: 70.5)"
              arrow
              key={field.name}
            >
              <NumericFormat
                name={field.name}
                value={formData[field.name]}
                onValueChange={(values) =>
                  setFormData({ ...formData, [field.name]: values.value })
                }
                label={field.label}
                customInput={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                allowNegative={false}
                decimalScale={3} // Permite até 3 casas decimais
                fixedDecimalScale={false} // Não força casas decimais
                allowLeadingZeros={false}
                isNumericString={true}
                suffix=" KG" // Adiciona " KG" ao final
                InputProps={{
                  style: { color: isDarkMode ? "#ffffff" : "#000000" },
                }}
                InputLabelProps={{
                  style: { color: isDarkMode ? "#cfcfcf" : "#000000" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                    "& fieldset": {
                      borderColor: isDarkMode ? "#ffffff" : "#000000",
                    },
                  },
                }}
              />
            </Tooltip>
          ) : field.name === "km" && title === "Abastecimento" ? (
            <Tooltip
              title="Informe o KM sem pontos ou vírgulas"
              arrow
              key={field.name}
            >
              <NumericFormat
                name={field.name}
                value={formData[field.name]}
                onValueChange={(values) =>
                  setFormData({ ...formData, [field.name]: values.value })
                }
                label={field.label}
                customInput={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                allowNegative={false}
                decimalScale={0}
                allowLeadingZeros={false}
                isNumericString={true}
                InputProps={{
                  style: { color: isDarkMode ? "#ffffff" : "#000000" },
                }}
                InputLabelProps={{
                  style: { color: isDarkMode ? "#cfcfcf" : "#000000" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                    "& fieldset": {
                      borderColor: isDarkMode ? "#ffffff" : "#000000",
                    },
                  },
                }}
              />
            </Tooltip>
          ) : field.name === "quantidadeLitros" && title === "Abastecimento" ? (
            <Tooltip
              title="Informe a quantidade de litros"
              arrow
              key={field.name}
            >
              <NumericFormat
                name={field.name}
                value={formData[field.name]}
                onValueChange={(values) =>
                  setFormData({ ...formData, [field.name]: values.value })
                }
                label={field.label}
                customInput={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                allowNegative={false}
                thousandSeparator="."
                decimalSeparator=","
                suffix=" L"
                InputProps={{
                  style: { color: isDarkMode ? "#ffffff" : "#000000" },
                }}
                InputLabelProps={{
                  style: { color: isDarkMode ? "#cfcfcf" : "#000000" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                    "& fieldset": {
                      borderColor: isDarkMode ? "#ffffff" : "#000000",
                    },
                  },
                }}
              />
            </Tooltip>
          ) : field.name === "valorAbastecimento" &&
            title === "Abastecimento" ? (
            <Tooltip
              title="Informe o valor do abastecimento em R$."
              arrow
              key={field.name}
            >
              <NumericFormat
                name={field.name}
                value={formData[field.name]}
                onValueChange={(values) =>
                  setFormData({ ...formData, [field.name]: values.value })
                }
                label={field.label}
                customInput={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                allowNegative={false}
                thousandSeparator="."
                decimalSeparator=","
                prefix="R$ "
                InputProps={{
                  style: { color: isDarkMode ? "#ffffff" : "#000000" },
                }}
                InputLabelProps={{
                  style: { color: isDarkMode ? "#cfcfcf" : "#000000" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                    "& fieldset": {
                      borderColor: isDarkMode ? "#ffffff" : "#000000",
                    },
                  },
                }}
              />
            </Tooltip>
          ) : field.name === "statusAcerto" ? (
            <Tooltip
              title="Selecione o status do acerto"
              arrow
              key={field.name}
            >
              <TextField
                select
                name={field.name}
                label={field.label}
                value={formData[field.name] || ""}
                onChange={(event) =>
                  setFormData({ ...formData, [field.name]: event.target.value })
                }
                variant="outlined"
                margin="normal"
                fullWidth
                InputProps={{
                  style: { color: isDarkMode ? "#ffffff" : "#000000" },
                }}
                InputLabelProps={{
                  style: { color: isDarkMode ? "#cfcfcf" : "#000000" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                    "& fieldset": {
                      borderColor: isDarkMode ? "#ffffff" : "#000000",
                    },
                  },
                }}
              >
                <MenuItem
                  value="pendente"
                  sx={{ color: "#FFC107", fontWeight: "bold" }}
                >
                  🟡 Pendente
                </MenuItem>
                <MenuItem
                  value="concluido"
                  sx={{ color: "#28A745", fontWeight: "bold" }}
                >
                  🟢 Concluído
                </MenuItem>
                <MenuItem
                  value="cancelado"
                  sx={{ color: "#DC3545", fontWeight: "bold" }}
                >
                  🔴 Cancelado
                </MenuItem>
              </TextField>
            </Tooltip>
          ) : title === "Contatos Filiais" ? (
            <Box key={title} sx={{ mt: 2 }}>
              <Typography
                variant="h6"
                sx={{ color: isDarkMode ? "#ffffff" : "#091f33", mb: 2, textAlign: "center"}}
              >
                Lista de Contatos das Filiais
              </Typography>
              <TableContainer
                component={Paper}
                sx={{ backgroundColor: "#052c65", borderRadius: 2 }}
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ color: "#ffffff", fontWeight: "bold" }}>
                        Endereço
                      </TableCell>
                      <TableCell sx={{ color: "#ffffff", fontWeight: "bold" }}>
                        Telefone
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ color: "#ffffff" }}>
                        Av. Paulista, 1000 - São Paulo, SP
                      </TableCell>
                      <TableCell sx={{ color: "#ffffff" }}>
                        <a
                          href="tel:+5511987654321"
                          style={{
                            color: "#1DB954",
                            textDecoration: "none",
                            fontWeight: "bold",
                          }}
                        >
                          📞 +55 11 98765-4321
                        </a>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ color: "#ffffff" }}>
                        Rua das Flores, 250 - Rio de Janeiro, RJ
                      </TableCell>
                      <TableCell sx={{ color: "#ffffff" }}>
                        <a
                          href="tel:+5521998765432"
                          style={{
                            color: "#1DB954",
                            textDecoration: "none",
                            fontWeight: "bold",
                          }}
                        >
                          📞 +55 21 99876-5432
                        </a>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ color: "#ffffff" }}>
                        Av. Brasil, 500 - Belo Horizonte, MG
                      </TableCell>
                      <TableCell sx={{ color: "#ffffff" }}>
                        <a
                          href="tel:+5531998765123"
                          style={{
                            color: "#1DB954",
                            textDecoration: "none",
                            fontWeight: "bold",
                          }}
                        >
                          📞 +55 31 99876-5123
                        </a>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ color: "#ffffff" }}>
                        Rodovia dos Bandeirantes, Km 23 - Campinas, SP
                      </TableCell>
                      <TableCell sx={{ color: "#ffffff" }}>
                        <a
                          href="tel:+5519996543210"
                          style={{
                            color: "#1DB954",
                            textDecoration: "none",
                            fontWeight: "bold",
                          }}
                        >
                          📞 +55 19 99654-3210
                        </a>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ color: "#ffffff" }}>
                        Rua Central, 45 - Porto Alegre, RS
                      </TableCell>
                      <TableCell sx={{ color: "#ffffff" }}>
                        <a
                          href="tel:+5551995436781"
                          style={{
                            color: "#1DB954",
                            textDecoration: "none",
                            fontWeight: "bold",
                          }}
                        >
                          📞 +55 51 99543-6781
                        </a>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          ) : field.name === "fotoNotaFiscal" ? (
            <Box key={field.name}>
              <Typography
                sx={{ color: isDarkMode ? "#ffffff" : "#000000", mb: 1 }}
              >
                {field.label}
              </Typography>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(event) => {
                  const files = event.target.files;
                  if (files) {
                    setFormData({
                      ...formData,
                      [field.name]: [...(formData[field.name] || []), ...files],
                    });
                  }
                }}
                style={{ display: "none" }}
                id="fotoNotaFiscal-input"
              />
              <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                <Button
                  variant="contained"
                  component="span"
                  sx={{
                    backgroundColor: "#ffc107",
                    "&:hover": { backgroundColor: "#e0a800" },
                  }}
                  onClick={() => openCamera("normal")}
                >
                  📷 Tirar Foto Normal
                </Button>
                <Button
                  variant="contained"
                  component="span"
                  sx={{
                    backgroundColor: "#28a745",
                    "&:hover": { backgroundColor: "#218838" },
                  }}
                  onClick={() => openCamera("canhoto")}
                >
                  🧾 Tirar Foto do Canhoto
                </Button>
              </Box>

              {formData[field.name] && formData[field.name].length > 0 && (
                <Box sx={{ mt: 2 }}>
                  {formData[field.name].map((file, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: "#052c65",
                        p: 1,
                        borderRadius: 1,
                        mb: 1,
                      }}
                    >
                      <Typography sx={{ color: "#ffffff" }}>
                        {file.tipo === "normal"
                          ? "📷 Foto Normal"
                          : "🧾 Foto do Canhoto"}{" "}
                        - {file.name}
                      </Typography>
                      <Button
                        onClick={() => {
                          const newFiles = [...formData[field.name]];
                          newFiles.splice(index, 1);
                          setFormData({ ...formData, [field.name]: newFiles });
                        }}
                        variant="contained"
                        color="error"
                      >
                        Remover
                      </Button>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          ) : field.name === "valor" &&
            title === "Adiantamento para Despesas de Viagem" ? (
            <Tooltip
              title="Informe o valor do adiantamento"
              arrow
              key={field.name}
            >
              <NumericFormat
                name={field.name}
                value={formData[field.name]}
                onValueChange={(values) =>
                  setFormData({ ...formData, [field.name]: values.value })
                }
                label={field.label}
                customInput={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                allowNegative={false}
                thousandSeparator="."
                decimalSeparator=","
                prefix="R$ "
                InputProps={{
                  style: { color: isDarkMode ? "#ffffff" : "#000000" },
                }}
                InputLabelProps={{
                  style: { color: isDarkMode ? "#cfcfcf" : "#000000" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                    "& fieldset": {
                      borderColor: isDarkMode ? "#ffffff" : "#000000",
                    },
                  },
                }}
              />
            </Tooltip>
          ) : field.name === "numeroRecibo" &&
            title === "Adiantamento para Despesas de Viagem" ? (
            <Tooltip
              title="Informe apenas números no recibo"
              arrow
              key={field.name}
            >
              <NumericFormat
                name={field.name}
                value={formData[field.name]}
                onValueChange={(values) =>
                  setFormData({ ...formData, [field.name]: values.value })
                }
                label={field.label}
                customInput={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                allowNegative={false}
                decimalScale={0}
                allowLeadingZeros={false}
                isNumericString={true}
                InputProps={{
                  style: { color: isDarkMode ? "#ffffff" : "#000000" },
                }}
                InputLabelProps={{
                  style: { color: isDarkMode ? "#cfcfcf" : "#000000" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                    "& fieldset": {
                      borderColor: isDarkMode ? "#ffffff" : "#000000",
                    },
                  },
                }}
              />
            </Tooltip>
          ) : field.name === "nf" ? (
            <Tooltip
              title="Número da Nota Fiscal (NF) utilizada na operação de transporte."
              arrow
            >
              <NumericFormat
                key={field.name}
                name={field.name}
                value={formData[field.name]}
                onValueChange={(values) =>
                  setFormData({ ...formData, [field.name]: values.value })
                }
                label={field.label}
                customInput={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                allowNegative={false}
                isNumericString={true}
                InputProps={{
                  style: { color: isDarkMode ? "#ffffff" : "#000000" },
                }}
                InputLabelProps={{
                  style: { color: isDarkMode ? "#cfcfcf" : "#000000" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                    "& fieldset": {
                      borderColor: isDarkMode ? "#ffffff" : "#000000",
                    },
                  },
                }}
              />
            </Tooltip>
          ) : title === "Consultas" ? (
            <Box
              key={title}
              sx={{
                mt: 6,
                px: 2, 
                overflowX: "hidden",
              }}
            >
              {(() => {
                const [filtroStatus, setFiltroStatus] = useState("todos");

                const dadosConsultas = [
                  {
                    id: 1,
                    inicio: "01/02/2024",
                    fim: "10/02/2024",
                    origem: "São Paulo - SP",
                    destino: "Rio de Janeiro - RJ",
                    status: "Concluído",
                  },
                  {
                    id: 2,
                    inicio: "05/02/2024",
                    fim: "15/02/2024",
                    origem: "Curitiba - PR",
                    destino: "Porto Alegre - RS",
                    status: "Pendente",
                  },
                  {
                    id: 3,
                    inicio: "07/02/2024",
                    fim: "17/02/2024",
                    origem: "Belo Horizonte - MG",
                    destino: "Brasília - DF",
                    status: "Cancelado",
                  },
                  {
                    id: 4,
                    inicio: "08/02/2024",
                    fim: "18/02/2024",
                    origem: "Salvador - BA",
                    destino: "Recife - PE",
                    status: "Concluído",
                  },
                  {
                    id: 5,
                    inicio: "12/02/2024",
                    fim: "22/02/2024",
                    origem: "Manaus - AM",
                    destino: "Fortaleza - CE",
                    status: "Pendente",
                  },
                ];

                const dadosFiltrados =
                  filtroStatus === "todos"
                    ? dadosConsultas
                    : dadosConsultas.filter(
                        (item) => item.status === filtroStatus
                      );

                return (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: 2,
                        mb: 4, 
                      }}
                    >
                      <Select
                        value={filtroStatus}
                        onChange={(e) => setFiltroStatus(e.target.value)}
                        displayEmpty
                        variant="outlined"
                        sx={{
                          backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                          color: isDarkMode ? "#ffffff" : "#000000",
                          "& fieldset": {
                            borderColor: isDarkMode ? "#ffffff" : "#000000",
                          },
                        }}
                      >
                        <MenuItem value="todos">Todos</MenuItem>
                        <MenuItem value="Concluído">🟢 Concluído</MenuItem>
                        <MenuItem value="Pendente">🟡 Pendente</MenuItem>
                        <MenuItem value="Cancelado">🔴 Cancelado</MenuItem>
                      </Select>
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        color: isDarkMode ? "#ffffff" : "#091f33",
                        fontWeight: "bold",
                        mt: 4, 
                        mb: 4, 
                      }}
                    >
                      Histórico de Consultas
                    </Typography>

                    <TableContainer
                      component={Paper}
                      sx={{
                        backgroundColor: "#052c65",
                        borderRadius: 2,
                        mt: 2,
                        maxWidth: "100%",
                        overflowX: "auto", 
                      }}
                    >
                      <Table
                        sx={{
                          minWidth: 500,
                          tableLayout: "auto", 
                        }}
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell
                              sx={{
                                color: "#ffffff",
                                fontWeight: "bold",
                                textAlign: "center",
                              }}
                            >
                              Período
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "#ffffff",
                                fontWeight: "bold",
                                textAlign: "center",
                              }}
                            >
                              Origem
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "#ffffff",
                                fontWeight: "bold",
                                textAlign: "center",
                              }}
                            >
                              Destino
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "#ffffff",
                                fontWeight: "bold",
                                textAlign: "center",
                              }}
                            >
                              Status
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {dadosFiltrados.map((consulta) => (
                            <TableRow key={consulta.id}>
                              <TableCell
                                sx={{ color: "#ffffff", textAlign: "center" }}
                              >
                                {consulta.inicio} - {consulta.fim}
                              </TableCell>
                              <TableCell
                                sx={{ color: "#ffffff", textAlign: "center" }}
                              >
                                {consulta.origem}
                              </TableCell>
                              <TableCell
                                sx={{ color: "#ffffff", textAlign: "center" }}
                              >
                                {consulta.destino}
                              </TableCell>
                              <TableCell
                                sx={{
                                  fontWeight: "bold",
                                  textAlign: "center", 
                                  color:
                                    consulta.status === "Concluído"
                                      ? "#28A745"
                                      : consulta.status === "Pendente"
                                        ? "#FFC107"
                                        : "#DC3545",
                                }}
                              >
                                {consulta.status === "Concluído" && (
                                  <>
                                    🟢 <span>Concluído</span>
                                  </>
                                )}
                                {consulta.status === "Pendente" && (
                                  <>
                                    🟡 <span>Pendente</span>
                                  </>
                                )}
                                {consulta.status === "Cancelado" && (
                                  <>
                                    🔴 <span>Cancelado</span>
                                  </>
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </>
                );
              })()}
            </Box>
          ) : field.name === "ctrc" ? (
            <Tooltip
              title="Código do Conhecimento de Transporte Rodoviário de Carga (CTRC)."
              arrow
            >
              <NumericFormat
                key={field.name}
                name={field.name}
                value={formData[field.name]}
                onValueChange={(values) =>
                  setFormData({ ...formData, [field.name]: values.value })
                }
                label={field.label}
                customInput={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                allowNegative={false}
                isNumericString={true}
                InputProps={{
                  style: { color: isDarkMode ? "#ffffff" : "#000000" },
                }}
                InputLabelProps={{
                  style: { color: isDarkMode ? "#cfcfcf" : "#000000" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                    "& fieldset": {
                      borderColor: isDarkMode ? "#ffffff" : "#000000",
                    },
                  },
                }}
              />
            </Tooltip>
          ) : (
            <TextField
              key={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              label={field.label}
              variant="outlined"
              margin="normal"
              fullWidth
              select={field.select}
              InputProps={{
                style: { color: isDarkMode ? "#ffffff" : "#000000" },
              }}
              InputLabelProps={{
                style: { color: isDarkMode ? "#cfcfcf" : "#000000" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                  "& fieldset": {
                    borderColor: isDarkMode ? "#ffffff" : "#000000",
                  },
                },
              }}
            >
              {field.select &&
                field.options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
            </TextField>
          );
        })}

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            backgroundColor: "rgb(5, 44, 101)",
            "&:hover": {
              backgroundColor: "#198754",
            },
          }}
          onClick={handleSubmit}
          disabled={title === "Consultas" || title === "Contatos Filiais"} // validação para desabilitar o botão enviar para tal tópico, já que está globalmente.
          style={{
            display: title === "Consultas" || title === "Contatos Filiais" ? "none" : "block", // Oculta o botão em "Consultas e contatos".
          }}
        >
          Enviar
        </Button>
      </Box>
    </Box>
  );
}

function MainMenu({ onNavigate, isDarkMode }) {
  const menuItems = [
    {
      title: "Nova Viagem",
      icon: <LocalShippingIcon />,
      path: "novo-embarque",
    },
    {
      title: "Deslocamento",
      icon: <LocalConvenienceStoreIcon />,
      path: "deslocamento",
    },
    {
      title: "Finalizar Viagem",
      icon: <LocationOnIcon />,
      path: "finalizar-viagem",
    },
    {
      title: "Abastecimento",
      icon: <DirectionsCarIcon />,
      path: "abastecimento",
    },
    { title: "Serviços", icon: <StoreIcon />, path: "servicos" },
    { title: "Adiantamento", icon: <DashboardIcon />, path: "adiantamento" },
    {
      title: "Contatos Filiais",
      icon: <PeopleIcon />,
      path: "contatos-filiais",
    },
    {
      title: "Consultas",
      icon: <Business />,
      path: "consultas",
    },
  ];

  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Grid container spacing={3} justifyContent="center">
        {menuItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.path}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#052c65",
                cursor: "pointer",
                color: "#ffffff",
                "&:hover": { backgroundColor: "#198754" },
              }}
              onClick={() => onNavigate(item.path)}
            >
              {item.icon}
              <Typography
                variant="h6"
                sx={{
                  mt: 1,
                  fontWeight: "bold",
                  color: "#ffffff",
                }}
              >
                {item.title}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState("menu");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = useMemo(() => createDemoTheme(isDarkMode), [isDarkMode]);

  const handleNavigate = (path) => {
    setCurrentPage(path);
  };

  const renderContent = () => {
    if (currentPage === "menu") {
      return <MainMenu onNavigate={handleNavigate} />;
    }
    const formConfig = formularios[currentPage];
    return formConfig ? (
      <FormularioPadrao
        title={formConfig.title}
        fields={formConfig.fields}
        onBack={() => setCurrentPage("menu")}
        isDarkMode={isDarkMode}
      />
    ) : null;
  };

  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
      />
      <Box
        sx={{
          p: 3,
          minHeight: "100vh",
          backgroundColor: theme.palette.background.default,
          transition: "background-color 0.5s ease, color 0.5s ease",
        }}
      >
        {currentPage === "menu" ? (
          <MainMenu onNavigate={handleNavigate} isDarkMode={isDarkMode} />
        ) : (
          <FormularioPadrao
            title={formularios[currentPage]?.title}
            fields={formularios[currentPage]?.fields}
            onBack={() => setCurrentPage("menu")}
            isDarkMode={isDarkMode}
          />
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
