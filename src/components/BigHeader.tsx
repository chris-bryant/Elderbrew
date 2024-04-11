import Typography from "@mui/material/Typography";

interface BigHeaderProps {
  children: React.ReactNode;
}

export default function BigHeader({ children, ...props }: BigHeaderProps) {
  return (
    <Typography variant="h1" sx={{
        fontSize: {
          xs: '4rem',
          sm: '6.5rem',
        },
        textTransform: 'uppercase',
        margin: '0 auto',
        color: '#000',
        width: '100%',
        span: {
          fontWeight: 'bold',
          fontStyle: 'italic',
        }
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}
