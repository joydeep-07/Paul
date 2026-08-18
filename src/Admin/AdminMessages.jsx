import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { toast } from "sonner";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  CircularProgress,
  useTheme,
} from "@mui/material";
import { Trash2, Mail, User, Calendar } from "lucide-react";
import SidePanel from "../admin/SidePanel";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  const fetchMessages = async () => {
    try {
      setLoading(true);

      const { data, error } = await supabase
        .from("Contacts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setMessages(data || []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load messages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from("Contacts").delete().eq("id", id);

      if (error) throw error;

      setMessages((prev) => prev.filter((msg) => msg.id !== id));

      toast.success("Message deleted successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete message");
    }
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg-main)]">
      <SidePanel />

      <Box
        className="
          w-full
          bg-[var(--bg-main)]
          pt-25
          px-4
          sm:px-6
          md:px-12
          lg:pl-28
          text-[var(--text-main)]
          transition-all
          duration-300
          pb-20
        "
      >
        <div className="mx-auto max-w-8xl">
          {/* HEADER */}
          <div className="mb-8 flex items-center justify-between border-b border-[var(--border-light)] pb-6">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--accent-primary)]">
                Admin Dashboard
              </span>

              <h1 className="heading-font mt-2 text-3xl sm:text-4xl">
                Inbox Messages
              </h1>
            </div>

            <span className="text-xs font-medium text-[var(--text-secondary)]">
              Total: {messages.length}
            </span>
          </div>

          {/* CONTENT */}
          {loading ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="300px"
            >
              <CircularProgress
                sx={{
                  color: "var(--accent-primary)",
                }}
              />
            </Box>
          ) : messages.length === 0 ? (
            <Paper
              elevation={0}
              sx={{
                backgroundColor: "transparent",
                border: "1px dashed var(--border-light)",
                borderRadius: "4px",
                p: 6,
                textAlign: "center",
              }}
            >
              <Mail
                size={40}
                className="
                  mx-auto
                  mb-3
                  text-[var(--text-secondary)]
                  opacity-40
                "
              />

              <Typography
                variant="h6"
                sx={{
                  color: "var(--text-main)",
                  fontSize: "1rem",
                }}
                className="heading-font"
              >
                No messages found
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "var(--text-secondary)",
                  mt: 1,
                  fontSize: "0.85rem",
                }}
              >
                When visitors submit the contact form, their queries will appear
                here.
              </Typography>
            </Paper>
          ) : (
            <TableContainer
              component={Paper}
              elevation={0}
              sx={{
                backgroundColor: "transparent",
                border: "1px solid var(--border-light)",
                borderRadius: "4px",
                overflowX: "auto",

                "& .MuiTableCell-root": {
                  borderColor: "var(--border-light)",
                  color: "var(--text-main)",
                },
              }}
            >
              <Table aria-label="messages table">
                <TableHead>
                  <TableRow
                    sx={{
                      backgroundColor: "var(--bg-secondary)",
                    }}
                  >
                    <TableCell
                      sx={{
                        fontSize: "10px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: "var(--text-secondary)",
                      }}
                    >
                      Name
                    </TableCell>

                    <TableCell
                      sx={{
                        fontSize: "10px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: "var(--text-secondary)",
                      }}
                    >
                      Email
                    </TableCell>

                    <TableCell
                      sx={{
                        fontSize: "10px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: "var(--text-secondary)",
                      }}
                    >
                      Message
                    </TableCell>

                    <TableCell
                      sx={{
                        fontSize: "10px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: "var(--text-secondary)",
                      }}
                    >
                      Date
                    </TableCell>

                    <TableCell
                      align="right"
                      sx={{
                        fontSize: "10px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: "var(--text-secondary)",
                      }}
                    >
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {messages.map((msg) => (
                    <TableRow
                      key={msg.id}
                      sx={{
                        "&:hover": {
                          backgroundColor:
                            "color-mix(in srgb, var(--accent-primary) 5%, transparent)",
                        },
                        transition: "background-color 0.2s",
                      }}
                    >
                      <TableCell
                        sx={{
                          fontSize: "0.85rem",
                          fontWeight: 500,
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <User
                            size={14}
                            className="
                              shrink-0
                              text-[var(--accent-primary)]
                            "
                          />

                          {msg.name}
                        </div>
                      </TableCell>

                      <TableCell
                        sx={{
                          fontSize: "0.85rem",
                        }}
                      >
                        <a
                          href={`mailto:${msg.email}`}
                          className="
                            transition-colors
                            hover:text-[var(--accent-primary)]
                          "
                        >
                          {msg.email}
                        </a>
                      </TableCell>

                      <TableCell
                        sx={{
                          fontSize: "0.85rem",
                          maxWidth: "350px",
                          lineHeight: "1.6",
                        }}
                      >
                        <p className="line-clamp-2 text-[var(--text-secondary)]">
                          {msg.message}
                        </p>
                      </TableCell>

                      <TableCell
                        sx={{
                          fontSize: "0.75rem",
                          color: "var(--text-secondary)",
                        }}
                      >
                        <div className="flex items-center gap-1.5">
                          <Calendar size={12} className="shrink-0" />

                          {msg.created_at
                            ? new Date(msg.created_at).toLocaleDateString()
                            : "N/A"}
                        </div>
                      </TableCell>

                      <TableCell align="right">
                        <IconButton
                          onClick={() => handleDelete(msg.id)}
                          size="small"
                          sx={{
                            color: "var(--text-secondary)",
                            "&:hover": {
                              color: "#ef4444",
                              backgroundColor: "rgba(239, 68, 68, 0.1)",
                            },
                          }}
                          aria-label="delete message"
                        >
                          <Trash2 size={16} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      </Box>
    </div>
  );
};

export default AdminMessages;
