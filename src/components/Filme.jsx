import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { FaCalendarAlt, FaStar } from "react-icons/fa";
import { urlImagem } from "../services/tmdb";
import "./Filme.css";

function Filme({ filme }) {
  const ano = filme.release_date
    ? new Date(`${filme.release_date}T00:00:00`).getFullYear()
    : "—";

  return (
    <Card
      className="filme-card"
      sx={{
        backgroundColor: "#351C2B",
        color: "#F4B6CF",
        border: "1px solid rgba(200, 138, 168, 0.35)",
        borderRadius: 3,
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {urlImagem(filme.poster_path) ? (
        <CardMedia
          component="img"
          height="360"
          image={urlImagem(filme.poster_path)}
          alt={`Pôster de ${filme.title}`}
          sx={{ objectFit: "cover" }}
        />
      ) : (
        <div className="sem-poster">🎬 Sem pôster</div>
      )}

      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ color: "#F4B6CF", fontWeight: 700, mb: 1 }}>
          {filme.title}
        </Typography>

        <div className="informacoes">
          <p>
            <FaCalendarAlt /> <span>Ano:</span> {ano}
          </p>
          <p>
            <FaStar /> <span>Nota:</span> {filme.vote_average?.toFixed(1) ?? "—"}
          </p>
        </div>

        {filme.genre_ids?.slice(0, 3).map((genero) => (
          <Chip
            key={genero}
            label={`Gênero #${genero}`}
            size="small"
            sx={{
              mr: 0.7,
              mb: 0.7,
              color: "#090909",
              backgroundColor: "#F4B6CF",
            }}
          />
        ))}

        <Typography
          variant="body2"
          sx={{
            color: "#C88AA8",
            mt: 1,
            lineHeight: 1.6,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {filme.overview || "Sinopse não disponível."}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Filme;
