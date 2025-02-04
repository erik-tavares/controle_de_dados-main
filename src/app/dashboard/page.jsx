"use client";
import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { NumericFormat } from "react-number-format";
import InputMask from "react-input-mask"; // Importação para usar máscara

import {
  createTheme,
  ThemeProvider,
  AppBar,
  Toolbar,
  Grid,
  Paper,
  TextField,
  MenuItem,
  Button,
  IconButton,
  Tooltip,
  Modal,
  select,
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
import { Business, DirectionsBusRounded, DriveEtaRounded, Padding } from "@mui/icons-material";

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

// Função para criar tema com suporte a modo escuro/claro
const createDemoTheme = (isDarkMode) =>
  createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: { main: "#091f33" },
      background: { default: "#091f33", paper: "#091f33" },
      text: { primary: "#ffffff", secondary: "#ffffff" },
      divider: "#ffffff",
    },
    typography: { allVariants: { color: "#ffffff" } },
  });

// Cabeçalho com logotipo
function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: "center" }}>
        {/* <DirectionsBusRounded/> */}
        <Box sx={{ height: 40, margin: 4 }}>
          <Image src={Logo} alt="Logaux logo" width={250} height={250} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

// Definição dos formulários
const formularios = {
  "novo-embarque": {
    title: "Nova Viagem",
    fields: [
      // { name: "data", label: "Data" },
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
      { name: "consultaFim", label: "Fim" },
      { name: "statusAcerto", label: "Acerto" },
    ],
  },
};

// Componente de formulário dinâmico
function FormularioPadrao({ title, fields, onBack }) {
  const [formData, setFormData] = React.useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );

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

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Box sx={{ p: 4, maxWidth: 600, mx: "auto" }}>
      <IconButton onClick={onBack} sx={{ color: "#ffffff", mr: 1 }}>
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="h4" sx={{ color: "#ffffff" }}>
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
                    style: { color: "#ffffff", cursor: "pointer" },
                  }}
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  sx={{
                    "& .MuiOutlinedInput-root": { borderColor: "#ffffff" },
                  }}
                />
                <Modal open={modalOpen} onClose={handleCloseModal}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      bgcolor: "#091f33",
                      boxShadow: 24,
                      p: 4,
                      borderRadius: 2,
                    }}
                  >
                    <Typography sx={{ color: "#ffffff", mb: 2 }}>
                      Selecione Cliente e Cidade
                    </Typography>
                    <TextField
                      fullWidth
                      label="Cliente"
                      variant="outlined"
                      margin="normal"
                      value={selectedClient}
                      onChange={(e) => setSelectedClient(e.target.value)}
                      InputProps={{ style: { color: "#ffffff" } }}
                      InputLabelProps={{ style: { color: "#ffffff" } }}
                      sx={{
                        "& .MuiOutlinedInput-root": { borderColor: "#ffffff" },
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
                      InputLabelProps={{ style: { color: "#ffffff" } }}
                      sx={{
                        "& .MuiOutlinedInput-root": { borderColor: "#ffffff" },
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
                InputProps={{ style: { color: "#ffffff" } }}
                InputLabelProps={{ style: { color: "#ffffff" } }}
                sx={{
                  "& .MuiOutlinedInput-root fieldset": {
                    borderColor: "#ffffff",
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
                      InputProps={{ style: { color: "#ffffff" } }}
                      InputLabelProps={{ style: { color: "#ffffff" } }}
                      sx={{
                        "& .MuiOutlinedInput-root fieldset": {
                          borderColor: "#ffffff",
                        },
                      }}
                    />
                  )}
                </InputMask>
              )}
            </Box>
          ) : field.name === "fotoComprovante" ? (
            <Box key={field.name}>
              <Typography sx={{ color: "#ffffff", mb: 1 }}>
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
                  Adicionar Comprovante 📄
                </Button>
              </label>

              {/* Exibir lista de arquivos selecionados */}
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
                        📄 {file.name}
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
          ) : field.name === "peso" ? (
            <Tooltip title="Informe o peso em KG" arrow key={field.name}>
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
                suffix=" KG"
                InputProps={{
                  style: { color: "#ffffff" },
                }}
                InputLabelProps={{
                  style: { color: "#ffffff" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#ffffff" },
                    "&:hover fieldset": { borderColor: "#ffffff" },
                    "&.Mui-focused fieldset": { borderColor: "#ffffff" },
                  },
                }}
              />
            </Tooltip>
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
                  style: { color: "#ffffff" },
                }}
                InputLabelProps={{
                  style: { color: "#ffffff" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#ffffff" },
                    "&:hover fieldset": { borderColor: "#ffffff" },
                    "&.Mui-focused fieldset": { borderColor: "#ffffff" },
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
                  style: { color: "#ffffff" },
                }}
                InputLabelProps={{
                  style: { color: "#ffffff" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#ffffff" },
                    "&:hover fieldset": { borderColor: "#ffffff" },
                    "&.Mui-focused fieldset": { borderColor: "#ffffff" },
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
                decimalScale={0} // Sem casas decimais
                allowLeadingZeros={false}
                isNumericString={true}
                InputProps={{
                  style: { color: "#ffffff" },
                }}
                InputLabelProps={{
                  style: { color: "#ffffff" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#ffffff" },
                    "&:hover fieldset": { borderColor: "#ffffff" },
                    "&.Mui-focused fieldset": { borderColor: "#ffffff" },
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
                  style: { color: "#ffffff" },
                }}
                InputLabelProps={{
                  style: { color: "#ffffff" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#ffffff" },
                    "&:hover fieldset": { borderColor: "#ffffff" },
                    "&.Mui-focused fieldset": { borderColor: "#ffffff" },
                  },
                }}
              />
            </Tooltip>
          ) : field.name === "valorAbastecimento" &&
            title === "Abastecimento" ? (
            <Tooltip
              title="Informe o valor do abastecimento"
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
                  style: { color: "#ffffff" },
                }}
                InputLabelProps={{
                  style: { color: "#ffffff" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#ffffff" },
                    "&:hover fieldset": { borderColor: "#ffffff" },
                    "&.Mui-focused fieldset": { borderColor: "#ffffff" },
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
                  style: { color: "#ffffff" },
                }}
                InputLabelProps={{
                  style: { color: "#ffffff" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#ffffff" },
                    "&:hover fieldset": { borderColor: "#ffffff" },
                    "&.Mui-focused fieldset": { borderColor: "#ffffff" },
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
              <Typography variant="h6" sx={{ color: "#ffffff", mb: 2 }}>
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
                    {/* Exemplos de endereços e telefones de filiais */}
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
              <Typography sx={{ color: "#ffffff", mb: 1 }}>
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

              {/* Exibir prévia das fotos tiradas */}
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
                  style: { color: "#ffffff" },
                }}
                InputLabelProps={{
                  style: { color: "#ffffff" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#ffffff" },
                    "&:hover fieldset": { borderColor: "#ffffff" },
                    "&.Mui-focused fieldset": { borderColor: "#ffffff" },
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
                decimalScale={0} // Sem casas decimais
                allowLeadingZeros={false}
                isNumericString={true}
                InputProps={{
                  style: { color: "#ffffff" },
                }}
                InputLabelProps={{
                  style: { color: "#ffffff" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#ffffff" },
                    "&:hover fieldset": { borderColor: "#ffffff" },
                    "&.Mui-focused fieldset": { borderColor: "#ffffff" },
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
                  style: { color: "#ffffff" },
                }}
                InputLabelProps={{
                  style: { color: "#ffffff" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#ffffff" },
                    "&:hover fieldset": { borderColor: "#ffffff" },
                    "&.Mui-focused fieldset": { borderColor: "#ffffff" },
                  },
                }}
              />
            </Tooltip>
          ) : field.name === "consultaInicio" ||
            field.name === "consultaFim" ? (
            <Tooltip
              title="Selecione a data no calendário"
              arrow
              key={field.name}
            >
              <TextField
                name={field.name}
                label={field.label}
                type="date"
                value={formData[field.name] || ""}
                onChange={(event) =>
                  setFormData({ ...formData, [field.name]: event.target.value })
                }
                variant="outlined"
                margin="normal"
                fullWidth
                InputProps={{
                  style: { color: "#ffffff" },
                }}
                InputLabelProps={{
                  shrink: true,
                  style: { color: "#ffffff" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#ffffff" },
                    "&:hover fieldset": { borderColor: "#ffffff" },
                    "&.Mui-focused fieldset": { borderColor: "#ffffff" },
                  },
                }}
              />
            </Tooltip>
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
                  style: { color: "#ffffff" },
                }}
                InputLabelProps={{
                  style: { color: "#ffffff" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#ffffff" },
                    "&:hover fieldset": { borderColor: "#ffffff" },
                    "&.Mui-focused fieldset": { borderColor: "#ffffff" },
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
              InputProps={{ style: { color: "#ffffff" } }}
              InputLabelProps={{ style: { color: "#ffffff" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ffffff" },
                  "&:hover fieldset": { borderColor: "" },
                  "&.Mui-focused fieldset": { borderColor: "#ffffff" },
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
        >
          Enviar
        </Button>
      </Box>
    </Box>
  );
}

// Tela principal de navegação
function MainMenu({ onNavigate }) {
  const menuItems = [
    // { title: "Nova Ordem", icon: <DashboardIcon />, path: "nova-ordem" },
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
    // { title: "Motorista", icon: <PeopleIcon />, path: "motorista" },
  ];

  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      {/* <Typography variant="h4" sx={{ mb: 4 }}>
        Menu Principal
      </Typography> */}
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
              <Typography variant="h6" sx={{ mt: 1 }}>
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
  const [currentPage, setCurrentPage] = React.useState("menu");
  const theme = React.useMemo(() => createDemoTheme(false), []);

  const handleNavigate = (path) => {
    setCurrentPage(path);
  };

  const renderContent = () => {
    if (currentPage === "menu") return <MainMenu onNavigate={handleNavigate} />;
    const formConfig = formularios[currentPage];
    return formConfig ? (
      <FormularioPadrao
        title={formConfig.title}
        fields={formConfig.fields}
        onBack={() => setCurrentPage("menu")}
      />
    ) : null;
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      {renderContent()}
    </ThemeProvider>
  );
}

export default App;
