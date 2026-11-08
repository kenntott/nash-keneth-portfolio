import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createCvPdf() {
  const pdfDoc = await PDFDocument.create();

  // Standard A4 dimensions in points: 595.28 x 841.89
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const page = pdfDoc.addPage([pageWidth, pageHeight]);

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Palette: Professional ATS-friendly dark charcoal with subtle violet branding
  const colorPrimary = rgb(0.07, 0.07, 0.10);     // #12121A
  const colorSecondary = rgb(0.30, 0.30, 0.38);   // #4D4D61
  const colorAccent = rgb(0.45, 0.20, 0.82);      // #7333D1 (Violet)
  const colorDivider = rgb(0.82, 0.82, 0.88);     // #D1D1E0
  const colorLink = rgb(0.12, 0.40, 0.82);        // Professional Blue

  const leftMargin = 45;
  const rightMargin = pageWidth - 45;
  const contentWidth = rightMargin - leftMargin;

  let y = pageHeight - 44;

  // Helper to draw horizontal divider
  function drawDivider(yPos, color = colorDivider, thickness = 0.75) {
    page.drawLine({
      start: { x: leftMargin, y: yPos },
      end: { x: rightMargin, y: yPos },
      thickness,
      color,
    });
  }

  // Helper to add clickable URI link annotation
  function addLinkAnnotation(x, yPos, width, height, url) {
    const linkAnnotation = pdfDoc.context.obj({
      Type: 'Annot',
      Subtype: 'Link',
      Rect: [x, yPos - 2, x + width, yPos + height + 2],
      Border: [0, 0, 0],
      A: {
        Type: 'Action',
        S: 'URI',
        URI: pdfDoc.context.obj(url),
      },
    });
    const annotRef = pdfDoc.context.register(linkAnnotation);
    const existingAnnots = page.node.Annots();
    if (existingAnnots) {
      existingAnnots.push(annotRef);
    } else {
      page.node.set(pdfDoc.context.obj('Annots'), pdfDoc.context.obj([annotRef]));
    }
  }

  // Helper to draw section header
  function drawSectionHeader(title) {
    y -= 14;
    page.drawText(title.toUpperCase(), {
      x: leftMargin,
      y,
      size: 10.5,
      font: fontBold,
      color: colorAccent,
    });
    y -= 4;
    drawDivider(y, colorAccent, 1);
    y -= 11;
  }

  // Helper to wrap and draw paragraph text
  function drawParagraph(text, font, size, color, lineHeight = 13) {
    const words = text.split(' ');
    let currentLine = '';

    for (let i = 0; i < words.length; i++) {
      const testLine = currentLine ? `${currentLine} ${words[i]}` : words[i];
      const testWidth = font.widthOfTextAtSize(testLine, size);

      if (testWidth > contentWidth && currentLine) {
        page.drawText(currentLine, { x: leftMargin, y, size, font, color });
        y -= lineHeight;
        currentLine = words[i];
      } else {
        currentLine = testLine;
      }
    }

    if (currentLine) {
      page.drawText(currentLine, { x: leftMargin, y, size, font, color });
      y -= lineHeight;
    }
  }

  // ==========================================
  // HEADER
  // ==========================================
  page.drawText("NASH KENETH Q. BARZO", {
    x: leftMargin,
    y,
    size: 22,
    font: fontBold,
    color: colorPrimary,
  });
  y -= 17;

  page.drawText("Aspiring Full-Stack Web Developer", {
    x: leftMargin,
    y,
    size: 11.5,
    font: fontBold,
    color: colorAccent,
  });
  y -= 15;

  page.drawText("Tuyac Village, Cannery Site, Polomolok, South Cotabato, Philippines", {
    x: leftMargin,
    y,
    size: 9,
    font: fontRegular,
    color: colorSecondary,
  });
  y -= 14;

  // Clickable contact row
  const emailText = "Email: barzonashkenneth@gmail.com";
  const githubText = "GitHub: github.com/kenntott";
  const fbText = "Facebook Profile";
  const igText = "Instagram Profile";
  const bullet = "  •  ";

  let curX = leftMargin;
  const linkSize = 8.5;

  // Email
  page.drawText(emailText, { x: curX, y, size: linkSize, font: fontRegular, color: colorLink });
  const emailWidth = fontRegular.widthOfTextAtSize(emailText, linkSize);
  addLinkAnnotation(curX, y, emailWidth, 8.5, "mailto:barzonashkenneth@gmail.com");
  curX += emailWidth;

  page.drawText(bullet, { x: curX, y, size: linkSize, font: fontRegular, color: colorSecondary });
  curX += fontRegular.widthOfTextAtSize(bullet, linkSize);

  // GitHub
  page.drawText(githubText, { x: curX, y, size: linkSize, font: fontRegular, color: colorLink });
  const githubWidth = fontRegular.widthOfTextAtSize(githubText, linkSize);
  addLinkAnnotation(curX, y, githubWidth, 8.5, "https://github.com/kenntott");
  curX += githubWidth;

  page.drawText(bullet, { x: curX, y, size: linkSize, font: fontRegular, color: colorSecondary });
  curX += fontRegular.widthOfTextAtSize(bullet, linkSize);

  // Facebook
  page.drawText(fbText, { x: curX, y, size: linkSize, font: fontRegular, color: colorLink });
  const fbWidth = fontRegular.widthOfTextAtSize(fbText, linkSize);
  addLinkAnnotation(curX, y, fbWidth, 8.5, "https://www.facebook.com/share/1AFFXqztJw/");
  curX += fbWidth;

  page.drawText(bullet, { x: curX, y, size: linkSize, font: fontRegular, color: colorSecondary });
  curX += fontRegular.widthOfTextAtSize(bullet, linkSize);

  // Instagram
  page.drawText(igText, { x: curX, y, size: linkSize, font: fontRegular, color: colorLink });
  const igWidth = fontRegular.widthOfTextAtSize(igText, linkSize);
  addLinkAnnotation(curX, y, igWidth, 8.5, "https://www.instagram.com/nshkenn?rpxt=Y2djMHFzOWpyOXZ1");

  y -= 9;
  drawDivider(y, colorDivider, 0.75);

  // ==========================================
  // 1. PROFESSIONAL SUMMARY
  // ==========================================
  drawSectionHeader("Professional Summary");
  drawParagraph(
    "Fourth-year Bachelor of Science in Information Technology student at South East Institute of Technology with practical experience in developing web-based applications through academic and client-based projects. Knowledgeable in frontend development, backend integration, database management, and responsive user interface development. Passionate about building functional, user-friendly, and efficient digital solutions while continuously improving technical and problem-solving skills. Aspiring to become a Full-Stack Web Developer.",
    fontRegular,
    9,
    colorPrimary,
    12.5
  );

  // ==========================================
  // 2. TECHNICAL SKILLS
  // ==========================================
  drawSectionHeader("Technical Skills");
  const skillsData = [
    { label: "Frontend Development:", items: "React.js, JavaScript, HTML5, CSS3, Tailwind CSS" },
    { label: "Backend Development:", items: "PHP, Supabase" },
    { label: "Database Management:", items: "PostgreSQL, MySQL" },
    { label: "Tools & Platforms:", items: "Visual Studio Code, Git, GitHub, Vercel" },
  ];

  for (const s of skillsData) {
    page.drawText(s.label, {
      x: leftMargin,
      y,
      size: 9,
      font: fontBold,
      color: colorPrimary,
    });
    page.drawText(s.items, {
      x: leftMargin + 138,
      y,
      size: 9,
      font: fontRegular,
      color: colorSecondary,
    });
    y -= 13;
  }

  // ==========================================
  // 3. KEY PROJECTS
  // ==========================================
  drawSectionHeader("Key Academic & System Development Projects");

  const projects = [
    {
      title: "DesinioKoleksyon — Printing Services Management and POS System",
      tech: "React.js, JavaScript, Supabase, PostgreSQL, Tailwind CSS",
      desc: "Developed a printing shop management and Point of Sale system designed to manage printing orders, cost estimation, payments, production monitoring, and sales reports.",
      liveUrl: "https://desinio-koleksyon.vercel.app/",
    },
    {
      title: "Rice Mill By-Product Utilization Management System",
      tech: "PHP, MySQL, React.js, Tailwind CSS",
      desc: "Developed a management system for monitoring rice mill by-products, inventory, delayed transactions, financial records, payments, and automated reports.",
    },
    {
      title: "Barangay Kinilis Digital Governance Portal",
      tech: "React.js, JavaScript, Supabase, PostgreSQL, Tailwind CSS",
      desc: "Developed a web-based governance portal designed to improve barangay services, digital transactions, complaint tracking, and communication between residents and administrators.",
    },
    {
      title: "Nexus Hub — Digital HQ System",
      tech: "React.js, JavaScript, Supabase, Tailwind CSS",
      desc: "Developed a centralized digital management platform for organizing business operations, employee records, projects, communication, and organizational activities, with an emphasis on security and access control.",
    },
  ];

  for (const p of projects) {
    page.drawText(p.title, {
      x: leftMargin,
      y,
      size: 9,
      font: fontBold,
      color: p.liveUrl ? colorLink : colorPrimary,
    });

    if (p.liveUrl) {
      const titleWidth = fontBold.widthOfTextAtSize(p.title, 9);
      addLinkAnnotation(leftMargin, y, titleWidth, 9, p.liveUrl);
    }

    const techText = `[ ${p.tech} ]`;
    const techWidth = fontOblique.widthOfTextAtSize(techText, 7.5);
    page.drawText(techText, {
      x: rightMargin - techWidth,
      y,
      size: 7.5,
      font: fontOblique,
      color: colorAccent,
    });

    y -= 11;
    drawParagraph(p.desc, fontRegular, 8.5, colorSecondary, 11.5);
    y -= 2;
  }

  // ==========================================
  // 4. EDUCATION
  // ==========================================
  drawSectionHeader("Education");
  page.drawText("South East Institute of Technology", {
    x: leftMargin,
    y,
    size: 9.5,
    font: fontBold,
    color: colorPrimary,
  });

  const eduStatus = "Fourth-Year College Student | Currently Pursuing";
  const eduStatusWidth = fontOblique.widthOfTextAtSize(eduStatus, 8.5);
  page.drawText(eduStatus, {
    x: rightMargin - eduStatusWidth,
    y,
    size: 8.5,
    font: fontOblique,
    color: colorAccent,
  });

  y -= 12;
  page.drawText("Bachelor of Science in Information Technology (BSIT)", {
    x: leftMargin,
    y,
    size: 9,
    font: fontRegular,
    color: colorSecondary,
  });
  y -= 4;

  // ==========================================
  // 5. EXPERIENCE
  // ==========================================
  drawSectionHeader("Practical Development Experience");

  const expItems = [
    {
      title: "Student-Based Web Development Projects",
      desc: "Worked on web development projects for fellow students, helping create and improve functional systems based on their academic and project requirements.",
    },
    {
      title: "Freelance / Client-Based Development",
      desc: "Gained practical experience working with clients on website and system development tasks, translating their requirements into functional and user-friendly applications.",
    },
    {
      title: "Academic System Development",
      desc: "Collaborated on academic software projects involving system planning, database management, frontend development, backend integration, and application testing.",
    },
  ];

  for (const exp of expItems) {
    page.drawText(`•  ${exp.title}`, {
      x: leftMargin,
      y,
      size: 9,
      font: fontBold,
      color: colorPrimary,
    });
    y -= 11;
    drawParagraph(`   ${exp.desc}`, fontRegular, 8.5, colorSecondary, 11.5);
    y -= 2;
  }

  // ==========================================
  // 6. CAREER OBJECTIVE
  // ==========================================
  drawSectionHeader("Career Objective");
  drawParagraph(
    "To pursue opportunities in web development where I can apply my technical knowledge, gain professional experience, contribute to meaningful projects, and grow into a skilled Full-Stack Web Developer.",
    fontRegular,
    9,
    colorPrimary,
    12.5
  );

  console.log(`Optimized final Y coordinate: ${y.toFixed(2)} pt on A4 page (height 841.89 pt)`);

  const pdfBytes = await pdfDoc.save();

  const publicDir = path.join(__dirname, '..', 'public');
  const targetPdf = path.join(publicDir, 'Nash_Keneth_Barzo_CV.pdf');
  const fallbackPdf = path.join(publicDir, 'resume.pdf');

  fs.writeFileSync(targetPdf, pdfBytes);
  fs.writeFileSync(fallbackPdf, pdfBytes);

  console.log(`Successfully generated ${targetPdf} (${pdfBytes.length} bytes)`);
  console.log(`Successfully generated ${fallbackPdf} (${pdfBytes.length} bytes)`);
}

createCvPdf().catch(err => {
  console.error("Error creating CV PDF:", err);
  process.exit(1);
});
