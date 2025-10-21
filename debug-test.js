const fs = require('fs');
const path = require('path');

console.log('🔍 Running comprehensive site debug test...\n');

// Test 1: Check for unused components
console.log('📦 Test 1: Checking for unused components...');
const unusedComponents = [
  'src/components/JpmcHover',
  'src/components/ResioHover', 
  'src/components/Component',
  'src/screens/Portfolio.jsx'
];

unusedComponents.forEach(comp => {
  const fullPath = path.join(process.cwd(), comp);
  if (fs.existsSync(fullPath)) {
    console.log(`❌ FOUND: ${comp} (should be deleted)`);
  } else {
    console.log(`✅ CLEAN: ${comp} (already removed)`);
  }
});

// Test 2: Check navigation labels
console.log('\n🔗 Test 2: Checking navigation labels...');
const heroFile = fs.readFileSync('src/screens/FullWidth/sections/HeroImage/HeroImage.jsx', 'utf8');
const footerFile = fs.readFileSync('src/screens/FullWidth/sections/Body/components/Footer.jsx', 'utf8');

if (heroFile.includes('>other work<') || heroFile.includes('"other work"')) {
  console.log('❌ ISSUE: HeroImage still has "other work" label');
} else if (heroFile.includes('>from my studio<')) {
  console.log('✅ PASS: HeroImage has correct "from my studio" label');
} else {
  console.log('⚠️  WARNING: Could not verify HeroImage navigation label');
}

if (footerFile.includes('>other work<')) {
  console.log('❌ ISSUE: Footer still has "other work" label');
} else if (footerFile.includes('>from my studio<')) {
  console.log('✅ PASS: Footer has correct "from my studio" label');
} else {
  console.log('⚠️  WARNING: Could not verify Footer navigation label');
}

// Test 3: Check scroll offset values
console.log('\n📏 Test 3: Checking scroll offset values...');
const heroScrollOffset = heroFile.match(/headerOffset = window\.innerWidth < 768 \? (\d+) : (\d+)/);
const footerScrollOffset = footerFile.match(/headerOffset = window\.innerWidth < 768 \? (\d+) : (\d+)/);

if (heroScrollOffset) {
  const [, mobile, desktop] = heroScrollOffset;
  if (mobile === '100' && desktop === '120') {
    console.log('✅ PASS: HeroImage has correct scroll offsets (100/120)');
  } else {
    console.log(`❌ ISSUE: HeroImage scroll offsets are ${mobile}/${desktop}, should be 100/120`);
  }
}

if (footerScrollOffset) {
  const [, mobile, desktop] = footerScrollOffset;
  if (mobile === '100' && desktop === '120') {
    console.log('✅ PASS: Footer has correct scroll offsets (100/120)');
  } else {
    console.log(`❌ ISSUE: Footer scroll offsets are ${mobile}/${desktop}, should be 100/120`);
  }
}

// Test 4: Check for image optimization
console.log('\n🖼️  Test 4: Checking image optimization...');
const photographyFile = fs.readFileSync('src/screens/FullWidth/sections/Body/components/Photography.jsx', 'utf8');
if (photographyFile.includes('loading="lazy"') || photographyFile.includes('loading={loading}')) {
  console.log('✅ PASS: Images have lazy loading');
} else {
  console.log('❌ ISSUE: Images missing lazy loading');
}

// Test 5: Check for smooth scroll
console.log('\n🎯 Test 5: Checking smooth scroll implementation...');
const indexCss = fs.readFileSync('src/index.css', 'utf8');
if (indexCss.includes('scroll-behavior: smooth')) {
  console.log('✅ PASS: Smooth scroll CSS is present');
} else {
  console.log('❌ ISSUE: Smooth scroll CSS is missing');
}

if (heroFile.includes('ease-in-out-cubic') || heroFile.includes('4 * progress * progress * progress')) {
  console.log('✅ PASS: Custom smooth scroll animation is implemented');
} else {
  console.log('❌ ISSUE: Custom smooth scroll animation is missing');
}

// Test 6: Check Vimeo videos
console.log('\n🎬 Test 6: Checking Vimeo video implementation...');
const studioFile = fs.readFileSync('src/screens/FullWidth/sections/Body/components/StudioWork.jsx', 'utf8');
const vimeoFile = fs.readFileSync('src/components/VimeoVideo/VimeoVideo.jsx', 'utf8');

const videoIds = ['1127931501', '1127936566', '1127936546'];
videoIds.forEach(id => {
  if (studioFile.includes(id)) {
    console.log(`✅ PASS: Video ${id} is present`);
  } else {
    console.log(`❌ ISSUE: Video ${id} is missing`);
  }
});

if (vimeoFile.includes('paddingBottom: \'177.6%\'')) {
  console.log('✅ PASS: Vimeo videos have correct aspect ratio');
} else {
  console.log('❌ ISSUE: Vimeo videos aspect ratio may be incorrect');
}

// Test 7: Check lightbox implementation
console.log('\n💡 Test 7: Checking lightbox implementation...');
if (photographyFile.includes('selectedImage') && photographyFile.includes('closeModal')) {
  console.log('✅ PASS: Lightbox functionality is implemented');
} else {
  console.log('❌ ISSUE: Lightbox functionality may be missing');
}

if (photographyFile.includes('bg-transparent border-0 p-0')) {
  console.log('✅ PASS: Lightbox close button has no background');
} else {
  console.log('❌ ISSUE: Lightbox close button may have unwanted background');
}

// Test 8: Check hover card preloading
console.log('\n🎨 Test 8: Checking hover card preloading...');
const hoverCardFile = fs.readFileSync('src/components/HoverCard/HoverCard.jsx', 'utf8');
if (hoverCardFile.includes('new Image()') && hoverCardFile.includes('onload')) {
  console.log('✅ PASS: Hover images are preloaded');
} else {
  console.log('❌ ISSUE: Hover images may not be preloaded');
}

// Test 9: Check mobile menu
console.log('\n📱 Test 9: Checking mobile menu implementation...');
if (heroFile.includes('isMenuOpen') && heroFile.includes('hamburger')) {
  console.log('✅ PASS: Mobile hamburger menu is implemented');
} else {
  console.log('⚠️  WARNING: Mobile menu implementation unclear');
}

if (heroFile.includes('WebkitTransform') && heroFile.includes('WebkitTransition')) {
  console.log('✅ PASS: Safari-compatible transforms are present');
} else {
  console.log('❌ ISSUE: Safari-compatible transforms may be missing');
}

// Test 10: Check sticky header
console.log('\n📌 Test 10: Checking sticky header...');
if (heroFile.includes('fixed top-0') && heroFile.includes('isScrolled')) {
  console.log('✅ PASS: Sticky header is implemented');
} else {
  console.log('❌ ISSUE: Sticky header may not be working');
}

if (heroFile.includes('hi, i\'m steven') && heroFile.includes('bg-[#da0000]')) {
  console.log('✅ PASS: Red "hi, i\'m steven" box is present');
} else {
  console.log('❌ ISSUE: Red box may be missing');
}

console.log('\n✨ Debug test complete!\n');
