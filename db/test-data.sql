--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.4
-- Dumped by pg_dump version 9.5.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = public, pg_catalog;

--
-- Data for Name: bike; Type: TABLE DATA; Schema: public; Owner: ann
--

COPY bike (id, style, brand, model, color, brakes, speeds, handlebars, created_at, updated_at) FROM stdin;
1	cruiser	Fuji	Cambridge III	red	rim	1	mustache	2016-09-16 18:13:22.682023-07	\N
3	road	Raleigh	Technium	yellow+gray+pink	rim	12	drop	2016-09-16 18:24:52.781274-07	\N
4	hybrid	Surly	Straggler	purple+mint	disc	10	drop	2016-09-16 18:27:28.759123-07	\N
5	fat bike	State Bicycle Company	Megalith	yellow+mint+red	disc	7	riser	2016-09-16 21:31:49.890723-07	\N
6	bmx	Mongoose	Custon Trials Bike	silver+gold	disc	1	riser	2016-09-16 21:33:55.323714-07	\N
2	cruiser	Laguna BMX	Super Cruiser	chrome	none	1	other	2016-09-16 18:18:21.902632-07	\N
\.


--
-- Name: bike_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ann
--

SELECT pg_catalog.setval('bike_id_seq', 6, true);


--
-- Data for Name: city; Type: TABLE DATA; Schema: public; Owner: ann
--

COPY city (id, name, state, country) FROM stdin;
\.


--
-- Name: city_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ann
--

SELECT pg_catalog.setval('city_id_seq', 1, false);


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: ann
--

COPY "user" (id, created_at, last_login, username, facebook_id, name, first_name, last_name, facebook_link, gender, locale) FROM stdin;
\.


--
-- Data for Name: photo; Type: TABLE DATA; Schema: public; Owner: ann
--

COPY photo (id, original_filename, url_key, bike_id, user_id) FROM stdin;
\.


--
-- Name: photo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ann
--

SELECT pg_catalog.setval('photo_id_seq', 1, false);


--
-- Data for Name: story; Type: TABLE DATA; Schema: public; Owner: ann
--

COPY story (id, created_at, text, user_id) FROM stdin;
\.


--
-- Name: story_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ann
--

SELECT pg_catalog.setval('story_id_seq', 1, false);


--
-- Data for Name: theft; Type: TABLE DATA; Schema: public; Owner: ann
--

COPY theft (id, reported_at, description, bike_id, owner_id, recovered_at) FROM stdin;
\.


--
-- Name: theft_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ann
--

SELECT pg_catalog.setval('theft_id_seq', 1, false);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ann
--

SELECT pg_catalog.setval('user_id_seq', 1, false);


--
-- PostgreSQL database dump complete
--

