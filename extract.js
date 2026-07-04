const fs = require('fs');
const html = fs.readFileSync('C:/Users/user/.gemini/antigravity/scratch/teacher_training_hub/index.html', 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
fs.writeFileSync('C:/Users/user/.gemini/antigravity/scratch/teacher_training_hub/test.js', script);
