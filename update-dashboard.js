#!/usr/bin/env node

/**
 * Update dashboard HTML from opportunities.json
 * Run this whenever opportunities change
 */

const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'opportunities.json');
const templateFile = path.join(__dirname, 'index.html');

// Read data
const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

// Calculate stats
const totalOpps = Object.values(data.opportunities).reduce((sum, arr) => sum + arr.length, 0);
const activeOpps = ['researching', 'proposed', 'approved', 'inProgress'].reduce(
  (sum, stage) => sum + data.opportunities[stage].length,
  0
);
const liveCount = data.opportunities.live.length;

// Helper to format date
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// Helper to generate opportunity HTML
function generateOppHTML(opp) {
  let html = `
            <div class="opportunity">
                <div class="opp-name">${opp.name}</div>
                <div class="opp-desc">${opp.description}</div>
                <div class="opp-meta">
                    <span>Updated: ${formatDate(opp.lastUpdated)}</span>`;
  
  if (opp.revenue !== undefined) {
    const target = opp.revenueTarget || '?';
    html += `
                    <span class="opp-revenue">$${opp.revenue} / $${target}/mo</span>`;
  }
  
  html += `
                </div>
            </div>`;
  
  return html;
}

// Helper to generate stage HTML
function generateStageHTML(stageName, displayName, emoji, colorClass, opportunities) {
  const count = opportunities.length;
  
  let html = `
        <div class="stage">
            <div class="stage-header ${colorClass}">
                <span>${emoji} ${displayName}</span>
                <span class="stage-count">${count}</span>
            </div>`;
  
  if (count === 0) {
    const emptyMessages = {
      researching: 'No opportunities in research phase',
      proposed: 'No proposals awaiting decision',
      approved: 'No approved opportunities ready to build',
      inProgress: 'Nothing currently being built',
      live: 'No live products yet',
      rejected: 'No rejected or parked opportunities'
    };
    
    html += `
            <div class="empty-stage">${emptyMessages[stageName]}</div>`;
  } else {
    html += `
            <div class="opportunities">`;
    
    opportunities.forEach(opp => {
      html += generateOppHTML(opp);
    });
    
    html += `
            </div>`;
  }
  
  html += `
        </div>`;
  
  return html;
}

// Generate full HTML
const now = new Date();
const timestamp = now.toLocaleString('en-US', { 
  month: 'short', 
  day: 'numeric', 
  year: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  timeZone: 'UTC',
  timeZoneName: 'short'
});

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cole's Opportunity Dashboard</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: #f5f5f5;
        }
        
        header {
            background: white;
            padding: 30px;
            border-radius: 8px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }
        
        .stat-card {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 6px;
            border-left: 4px solid #007bff;
        }
        
        .stat-card.revenue {
            border-left-color: #28a745;
        }
        
        .stat-label {
            font-size: 12px;
            text-transform: uppercase;
            color: #666;
            font-weight: 600;
        }
        
        .stat-value {
            font-size: 24px;
            font-weight: bold;
            margin-top: 5px;
        }
        
        .pipeline {
            margin-top: 20px;
        }
        
        .stage {
            background: white;
            margin-bottom: 15px;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .stage-header {
            background: #007bff;
            color: white;
            padding: 12px 20px;
            font-weight: 600;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .stage-header.researching { background: #6c757d; }
        .stage-header.proposed { background: #ffc107; color: #333; }
        .stage-header.approved { background: #17a2b8; }
        .stage-header.in-progress { background: #007bff; }
        .stage-header.live { background: #28a745; }
        .stage-header.rejected { background: #dc3545; }
        
        .stage-count {
            background: rgba(255,255,255,0.2);
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 14px;
        }
        
        .opportunities {
            padding: 15px 20px;
        }
        
        .opportunity {
            padding: 15px 0;
            border-bottom: 1px solid #eee;
        }
        
        .opportunity:last-child {
            border-bottom: none;
        }
        
        .opp-name {
            font-weight: 600;
            font-size: 16px;
            margin-bottom: 5px;
        }
        
        .opp-desc {
            color: #666;
            font-size: 14px;
            margin-bottom: 8px;
        }
        
        .opp-meta {
            display: flex;
            gap: 20px;
            font-size: 13px;
            color: #999;
        }
        
        .opp-revenue {
            color: #28a745;
            font-weight: 600;
        }
        
        .empty-stage {
            padding: 20px;
            text-align: center;
            color: #999;
            font-style: italic;
        }
        
        footer {
            margin-top: 30px;
            text-align: center;
            color: #999;
            font-size: 14px;
        }
        
        .last-updated {
            margin-top: 10px;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <header>
        <h1>🐺 Cole's Opportunity Dashboard</h1>
        <p>Revenue-focused opportunity tracking • Target: $${data.revenueTarget}/month</p>
        
        <div class="stats">
            <div class="stat-card">
                <div class="stat-label">Total Opportunities</div>
                <div class="stat-value">${totalOpps}</div>
            </div>
            <div class="stat-card revenue">
                <div class="stat-label">Monthly Revenue</div>
                <div class="stat-value">$${data.monthlyRevenue} / $${data.revenueTarget}</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Active</div>
                <div class="stat-value">${activeOpps}</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Live Products</div>
                <div class="stat-value">${liveCount}</div>
            </div>
        </div>
    </header>
    
    <div class="pipeline">
        ${generateStageHTML('researching', 'Researching', '🔍', 'researching', data.opportunities.researching)}
        ${generateStageHTML('proposed', 'Proposed', '📋', 'proposed', data.opportunities.proposed)}
        ${generateStageHTML('approved', 'Approved', '✅', 'approved', data.opportunities.approved)}
        ${generateStageHTML('inProgress', 'In Progress', '🔨', 'in-progress', data.opportunities.inProgress)}
        ${generateStageHTML('live', 'Live', '🚀', 'live', data.opportunities.live)}
        ${generateStageHTML('rejected', 'Rejected/Parked', '❌', 'rejected', data.opportunities.rejected)}
    </div>
    
    <footer>
        <div>Cole • AI Revenue Agent</div>
        <div class="last-updated">Last updated: ${timestamp}</div>
    </footer>
</body>
</html>
`;

// Write the updated HTML
fs.writeFileSync(templateFile, html, 'utf8');
console.log('✅ Dashboard updated successfully');
console.log(`   Total opportunities: ${totalOpps}`);
console.log(`   Revenue: $${data.monthlyRevenue} / $${data.revenueTarget}`);
