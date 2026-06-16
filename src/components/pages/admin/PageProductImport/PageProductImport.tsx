import React from "react";
import API_PATHS from "~/constants/apiPaths";
import ProductsTable from "~/components/pages/admin/PageProductImport/components/ProductsTable";
import CSVFileImport from "~/components/pages/admin/PageProductImport/components/CSVFileImport";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function PageProductImport() {
  const [token, setToken] = React.useState<string>(
    localStorage.getItem("authorization_token") || ""
  );

  const saveToken = () => {
    if (token) {
      localStorage.setItem("authorization_token", token);
      alert("Token saved to localStorage!");
    } else {
      localStorage.removeItem("authorization_token");
      alert("Token removed from localStorage.");
    }
  };

  const generateToken = () => {
    const generated = btoa("RacharlaSanjana:TEST_PASSWORD");
    setToken(generated);
    localStorage.setItem("authorization_token", generated);
    alert(`Token generated and saved: ${generated}`);
  };

  const clearToken = () => {
    setToken("");
    localStorage.removeItem("authorization_token");
    alert("Token cleared from localStorage. Next request will return 401.");
  };

  return (
    <Box py={3}>
      <Box mb={3} p={2} border={1} borderColor="grey.300" borderRadius={1}>
        <Typography variant="subtitle1" gutterBottom>
          Authorization Token (stored in localStorage)
        </Typography>
        <Box display="flex" gap={1} alignItems="center" flexWrap="wrap">
          <TextField
            size="small"
            label="authorization_token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            sx={{ flexGrow: 1, minWidth: 300 }}
            placeholder="Base64 encoded credentials"
          />
          <Button variant="outlined" size="small" onClick={saveToken}>
            Save
          </Button>
          <Button variant="contained" size="small" color="primary" onClick={generateToken}>
            Generate Valid Token
          </Button>
          <Button variant="outlined" size="small" color="error" onClick={clearToken}>
            Clear Token (test 401)
          </Button>
        </Box>
      </Box>

      <Box mb={2} display="flex" justifyContent="space-between">
        <CSVFileImport
          url={`${API_PATHS.import}/import`}
          title="Import Products CSV"
        />
        <Button
          size="small"
          color="primary"
          variant="contained"
          sx={{ alignSelf: "end" }}
          component={Link}
          to={"/admin/product-form"}
        >
          Create product
        </Button>
      </Box>
      <ProductsTable />
    </Box>
  );
}

