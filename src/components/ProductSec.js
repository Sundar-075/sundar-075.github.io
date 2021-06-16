import { React, useState, useEffect } from "react";
import { Typography, Grid } from "@material-ui/core";
import Projects from "./Projects";
import { Zoom } from "react-reveal";
function ProductSec() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Sundar-075/repos")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Typography variant="h3" component="h3">
        Projects
      </Typography>
      <Grid container spacing={2} alignItems="stretch">
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={4}>
            <Zoom>
              <Projects
                name={product.name}
                description={product.description}
                url={product.html_url}
                lang_url={product.languages_url}
              />
            </Zoom>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProductSec;
