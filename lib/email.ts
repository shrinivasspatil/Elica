import nodemailer from 'nodemailer'

const smtpHost = process.env.SMTP_HOST || 'smtp.hostinger.com'
const smtpPort = Number(process.env.SMTP_PORT || 465)
const smtpUser = process.env.SMTP_USER || 'support@elicservicecenter.com'
const smtpPass = process.env.SMTP_PASS
const notifyTo = process.env.NOTIFY_EMAIL || 'srini.spatil@gmail.com'

function getTransporter() {
  if (!smtpPass) {
    throw new Error('SMTP_PASS is not configured')
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })
}

export async function sendLeadNotification(data: {
  name: string
  phone: string
  pincode: string
  service: string
  leadId: string
}) {
  const transporter = getTransporter()

  await transporter.sendMail({
    from: `"Elicaa Service" <${smtpUser}>`,
    to: notifyTo,
    replyTo: smtpUser,
    subject: `New lead: ${data.name} – ${data.service}`,
    text: [
      'New lead submission',
      '',
      `Lead ID: ${data.leadId}`,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Pincode: ${data.pincode}`,
      `Service: ${data.service}`,
    ].join('\n'),
    html: `
      <h2>New lead submission</h2>
      <p><strong>Lead ID:</strong> ${data.leadId}</p>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Pincode:</strong> ${data.pincode}</p>
      <p><strong>Service:</strong> ${data.service}</p>
    `,
  })
}

export async function sendBookingNotification(data: {
  bookingId: string
  customerName: string
  customerEmail: string
  customerPhone: string
  serviceId: string
  areaId: string
  address: string
  preferredDate?: string
  preferredTime?: string
  notes?: string
}) {
  const transporter = getTransporter()

  await transporter.sendMail({
    from: `"Elicaa Service" <${smtpUser}>`,
    to: notifyTo,
    replyTo: data.customerEmail || smtpUser,
    subject: `New booking: ${data.customerName}`,
    text: [
      'New booking submission',
      '',
      `Booking ID: ${data.bookingId}`,
      `Name: ${data.customerName}`,
      `Email: ${data.customerEmail}`,
      `Phone: ${data.customerPhone}`,
      `Service ID: ${data.serviceId}`,
      `Area ID: ${data.areaId}`,
      `Address: ${data.address}`,
      `Preferred date: ${data.preferredDate || 'Not specified'}`,
      `Preferred time: ${data.preferredTime || 'Not specified'}`,
      `Notes: ${data.notes || 'None'}`,
    ].join('\n'),
    html: `
      <h2>New booking submission</h2>
      <p><strong>Booking ID:</strong> ${data.bookingId}</p>
      <p><strong>Name:</strong> ${data.customerName}</p>
      <p><strong>Email:</strong> ${data.customerEmail}</p>
      <p><strong>Phone:</strong> ${data.customerPhone}</p>
      <p><strong>Service ID:</strong> ${data.serviceId}</p>
      <p><strong>Area ID:</strong> ${data.areaId}</p>
      <p><strong>Address:</strong> ${data.address}</p>
      <p><strong>Preferred date:</strong> ${data.preferredDate || 'Not specified'}</p>
      <p><strong>Preferred time:</strong> ${data.preferredTime || 'Not specified'}</p>
      <p><strong>Notes:</strong> ${data.notes || 'None'}</p>
    `,
  })
}
